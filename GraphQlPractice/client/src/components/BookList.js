import React from 'react';
import BookDetails from './BookDetails';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks () {
        const data = this.props.data;
        if (data.loading) {
            return <div>Loading Books...</div>;
        }
        return data.books.map((book) => {
            return <li key={book.id} onClick={(e) => {this.setState({ selected: book.id })}}>{book.name}</li>
        });
    }
    render () {
        return (
            <div className="book-list">
                <ul>
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);