import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

/*
  use uri: '/graphql', because, "proxy" is added in package.json
  as http://localhost:5000

  If "proxy" was not added,
  then use uri: "http://localhost:5000/graphql"
*/

const client = new ApolloClient({
  uri: '/graphql'
});

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
