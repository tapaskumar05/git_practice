const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;

const books = [
    { name: 'Shiva', id: '1', genre: 'Devotional' },
    { name: 'Wings of Fire', id: '2', genre: 'motivational' },
    { name: 'King of Kings', id: '3', genre: 'Fiction'}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                //code to get data from DB / other Source
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
