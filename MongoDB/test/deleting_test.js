const assert = require('assert');
const MarioChar = require('../models/mariochar');

/*
    char.remove()
    MarioChar.remove()
    MarioChar.findOneAndRemove()
*/

// Describe tests
describe ('Deleting records', function () {
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
    it ('Deletes one record from the Database', function (done) {
        MarioChar.findOneAndRemove({ name: 'Mario' }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });

});
