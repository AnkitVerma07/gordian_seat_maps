"use strict";
import gordianSeatsAPI from "../services/gordianSeatsAPI";

const gordianResolver = (() => {
  return {
    newTrip: async (parent: any, args: any, context: any, info: any) => {
      const data = args.input;
      gordianSeatsAPI.newTrip(data);
      return true;
    },
    getTrip: async (parent: any, args: any, context: any, info: any) => {
      return true;
    },
  };
})();

export default gordianResolver;
