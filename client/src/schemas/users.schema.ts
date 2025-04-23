import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($data: UserInput!) {
    signup(data: $data)
  }
`;

// Some code here
