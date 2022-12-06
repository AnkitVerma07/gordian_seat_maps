"use strict";

import { gql } from "apollo-server-express";
import gordianSeatType from "./types/gordianSeatType";

const typeDefs = gql`
  type Query {
    trip: Boolean
  }
  type Mutation {
    trip: Boolean
  }
  ${gordianSeatType}
`;

export default typeDefs;
