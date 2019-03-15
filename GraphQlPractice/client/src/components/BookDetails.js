import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';
import { loadavg } from 'os';

class BookDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            openBookDetailsSlider: false
        }
    }
    displayBookDetails () {
        const { book, loading } = this.props.data;
        if (book && !loading) {
            return (
                <div>
                    <div className="sub-heading">Book: {book.name}</div>
                    <p>Genre: {book.genre}</p>
                    <p>Author: {book.author.name}</p>
                    <p className="all-books">All Books by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            );
        }
        return <div class="lds-ripple"><div></div><div></div></div>;
    }
    componentDidMount () {
        if (this.props.bookId) {
            setTimeout(() => {
                this.setState({
                    openBookDetailsSlider: true
                })
            });
        }
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.bookId) {
            setTimeout(() => {
                this.setState({
                    openBookDetailsSlider: true
                })
            });
        }
    }
    closeSlider = () => {
        this.setState({
            openBookDetailsSlider: false
        })
    }
    render () {
        const style = { transform: this.state.openBookDetailsSlider ? 'translateX(0)' : 'translateX(100%)' };
        return (
            <div className="book-details" style={style}>
                <i className="material-icons close-icon" onClick={this.closeSlider}>close</i>
                <div className="main-heading">Book Details</div>
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);