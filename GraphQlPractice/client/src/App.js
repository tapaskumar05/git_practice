import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

// To do run multiple server on single server

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h2>Book List</h2>
          <div className="book-card">
            <BookList />
            <AddBook />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
