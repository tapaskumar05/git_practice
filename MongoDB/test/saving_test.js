const assert = require('assert');
const MarioChar = require('../models/mariochar');

/*
    The save() method was on a single instance...
    myChar = new MarioChar({ name: 'Mario' })
    myChar.save();

    The find() methods are on the models...
    MarioChar.find({ name: 'Mario' })

    If we don't provide any param
    MarioChar.find({}) , it will find all the records
*/

// Describe tests
describe ('Saving records', function () {
    // Create tests
    it ('Saves a record to the Database', function (done) {
        const char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    })
});
