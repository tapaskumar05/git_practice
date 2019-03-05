const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const books = [
    { name: 'Shiva', id: '1', genre: 'Devotional', authorId: '1' },
    { name: 'Wings  of Fire', id: '2', genre: 'motivational', authorId: '2' },
    { name: 'King of Kings', id: '3', genre: 'Fiction', authorId: '3'},
    { name: 'Shiva Triology', id: '4', genre: 'Devotional', authorId: '2' },
    { name: 'Wings  of Fire 2', id: '5', genre: 'motivational', authorId: '3' },
    { name: 'King of Beast', id: '6', genre: 'Fiction', authorId: '3'}
];

const authors = [
    { name: 'Tapas Kumar', id: '1', age: 25 },
    { name: 'APJ Abdul Kalam', id: '2', age: 42},
    { name: 'Terry', id: '3', age: 23}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, { authorId: parent.id })
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                //code to get data from DB / other Source
                return _.find(books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return _.find(authors, { id: args.id});
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
