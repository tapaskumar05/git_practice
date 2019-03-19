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
    selectBook = (id) => {
        this.setState({
            selected: id
        });
    }
    displayBooks () {
        const data = this.props.data;
        if (data.loading) {
            return <div className="lds-ripple"><div></div><div></div></div>;
        }
        return data.books.map((book) => {
            return <li key={book.id} onClick={() => this.selectBook(book.id)}>{book.name}</li>
        });
    }
    resetSelected = () => {
        this.setState({
            selected: null
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
                    ? <BookDetails 
                        bookId={this.state.selected}
                        loading={this.props.data.loading}
                        resetSelected={this.resetSelected} 
                       />
                    : null
                }
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);