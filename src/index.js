import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import {Routes} from './modules/Routes';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';
import { getAccessToken } from "./utils/auth";

const token = getAccessToken();

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: authLink.concat(httpLink),
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <Routes/>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
