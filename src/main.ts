"use strict";

import express from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import { ApolloServer } from "apollo-server-express";

import home from "./routes/home";
import router from "./routes/router";
import typeDefs from "./graph/typeDefs";
import resolvers from "./graph/resolvers";

const app = express();
const port = process.env.ENV_PORT;
const basePath = "/gordians";

const corsOptions = {
  origin: [/localhost.*/, /gordians.*/, /amazonaws.*/],
  credentials: true,
};
app.use(cors(corsOptions));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use(
  (() => {
    return (req: any, res: any, next: any) => {
      if (req.headers["x-amz-sns-message-type"]) {
        req.headers["content-type"] = "application/json;charset=UTF-8";
      }
      next();
    };
  })()
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", home);

app.use(passport.initialize());
app.use(passport.session());

app.use(`${basePath}/rest`, router);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
});

server.applyMiddleware({ app, path: `${basePath}/graphql` });

app.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`🚀 Server ready at :${port}${server.graphqlPath}. Lets play 🏓`)
);

export default app;
