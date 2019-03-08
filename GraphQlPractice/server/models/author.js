const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = Schema({
    name: String,
    age: Number
});

const AuthorModel = mongoose.model('Author', authorSchema);

module.exports = AuthorModel;
