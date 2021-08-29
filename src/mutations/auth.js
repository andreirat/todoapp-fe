import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation Register($registerInput: UserInput!) {
    register(input: $registerInput) {
      accessToken
      success
      message
    }
  }
`;

const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      accessToken
      success
      message
    }
  }
`;

export {
  LOGIN,
  REGISTER
}
