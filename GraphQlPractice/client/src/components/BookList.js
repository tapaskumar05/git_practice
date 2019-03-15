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
            return <div class="lds-ripple"><div></div><div></div></div>;
        }
        return data.books.map((book) => {
            return <li key={book.id} onClick={(e) => {this.setState({ selected: book.id })}}>{book.name}</li>
        });
    }
    render () {
        return (
            <div className="book-list">
                <div className="main-heading">Book List</div>
                <ul className="total-books">
                    {this.displayBooks()}
                </ul>
                { this.state.selected
                    ? <BookDetails bookId={this.state.selected} loading={this.props.data.loading} />
                    : null
                }
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);