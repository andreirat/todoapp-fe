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

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      accessToken
    }
  }
`;

export {
  LOGIN,
  REGISTER,
  REFRESH_TOKEN
}
