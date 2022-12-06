FROM node:18
WORKDIR /usr/src/gordian_seat_maps
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
ARG ENV_PORT
ENV ENV_PORT=$ENV_PORT
ARG GORDIAN_API_KEY
ENV GORDIAN_API_KEY=$GORDIAN_API_KEY
EXPOSE 80
CMD npm run start