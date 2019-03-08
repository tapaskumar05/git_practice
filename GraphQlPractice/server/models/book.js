const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    name: String,
    genre: String,
    authorId: String
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
