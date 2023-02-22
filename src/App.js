import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import BookList from './BookList';
import AddBook from './AddBook';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
