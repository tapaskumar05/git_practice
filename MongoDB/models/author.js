const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const BookSchema = Schema({
    title: String,
    pages: Number
});
const AuthorSchema = Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
