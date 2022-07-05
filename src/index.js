import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Sites from "./components/Sites";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://devtoolreviews.hasura.app/v1/graphql'
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>www.devtoolreviews.com</h1>
     <Sites />
   </ApolloProvider>
 );

 render(<App />, document.getElementById('root'));