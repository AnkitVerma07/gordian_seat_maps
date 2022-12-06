import { gql } from "apollo-server-express";

const gordianSeatType = gql`
  type seat {
    id: ID
  }
`;

export default gordianSeatType;
