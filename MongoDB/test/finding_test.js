const assert = require('assert');
const MarioChar = require('../models/mariochar');

/*
    The find() methods are on the models...
    MarioChar.find({ name: 'Mario' })

    If we don't provide any param
    MarioChar.find({}) , it will find all the records
*/

// Describe tests
describe ('Finding records', function () {
    let char;
    beforeEach (function (done) {
        char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });
    // Create tests
    it ('Finding one record from the Database', function (done) {
        MarioChar.findOne({ name: 'Mario' }).then(function(result) {
            assert(result.name === 'Mario');
            done();
        })
    });
    it ('Finding one record by ID from the Database', function (done) {
        MarioChar.findOne({ _id: char._id }).then(function(result) {
            assert(result._id.toString() === char._id.toString());
            done();
        })
    })
});
