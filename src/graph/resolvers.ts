"use strict";

import gordianResolver from "../resolvers/gordianResolver";

const resolvers = {
  Query: {
    trip: gordianResolver.getTrip,
  },
  Mutation: {
    trip: gordianResolver.newTrip,
  },
};

export default resolvers;
