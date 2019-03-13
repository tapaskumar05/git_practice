import React from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

class AddBook extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }
    displayAuthors () {
        const data = this.props.getAuthorsQuery;
        if (data.loading) {
            return <option disabled>Loading Books...</option>;
        }
        return data.authors.map((author) => {
            return <option key={author.id} value={author.id}>{author.name}</option>
        });
    }
    submitForm = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        });
    }
    render () {
        return (
            <form className="add-book-form" onSubmit={(e) => this.submitForm(e)}>
                <div className="field">
                    <label>Book Name</label>
                    <input type="text" onChange= {(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input type="text" onChange= {(e) => this.setState({ genre: e.target.value })}  />
                </div>
                <div className="field">
                    <label>Author</label>
                    <select onChange= {(e) => this.setState({ authorId: e.target.value })} >
                        <option value="">Select Author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>Add Book</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);