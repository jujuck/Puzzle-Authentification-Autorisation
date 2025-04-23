import { gql } from "@apollo/client";

export const GET_ALL_TRAINERS = gql`
  query GetAllTrainers {
    getAllTrainers {
      age
      city
      firstname
      id
      lastname
      sex
      speciality
    }
  }
`;
