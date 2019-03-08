const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests
describe('Nesting Records', function () {
    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(function () {
            done();
        });
    });
    // Create tests
    it ('Creates an author with sub-documents', function (done) {
        const pat = new Author({
            name: 'Patrick',
            books: [{
              title: 'Name of the Wind',
              pages: 400  
            }]
        });
        pat.save().then(function () {
            Author.findOne({ name: 'Patrick' }).then(function (record) {
                assert(record.books.length === 1);
                done();
            })
        });
    });
    it ('Adds a book to an Author', function (done) {
        const pat = new Author({
            name: 'Patrick',
            books: [{
              title: 'Name of the Wind',
              pages: 400  
            }]
        });
        pat.save().then(function () {
            Author.findOne({ name: 'Patrick' }).then(function (record) {
                // Add a book to the books array
                record.books.push({
                    title: 'Power of Universe',
                    pages: 500
                });
                record.save().then(function () {
                    Author.findOne({ name: 'Patrick' }).then(function (result) {
                        assert(result.books.length === 2);
                        done();
                    })
                });
            });
        });
    });
});
