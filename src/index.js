import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import {Routes} from './modules/Routes';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: "include",
  // headers: {
  //   authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVXNlciIsImlhdCI6MTYzMDE4OTI5NSwiZXhwIjoxNjMwMjc1Njk1fQ.c5hVizVkxPnoDu_p8T-qUJ0xvNLZLxpVy1t7SCWBS5A`
  // }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
