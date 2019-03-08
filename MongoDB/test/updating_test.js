const assert = require('assert');
const MarioChar = require('../models/mariochar');

/*
    char.update()
    MarioChar.update()
    MarioChar.findOneAndUpdate()

    To Check : (node:28318) DeprecationWarning: collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.
*/

// Describe tests
describe ('Updating records', function () {
    let char;
    beforeEach (function (done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });
    // Create tests
    it ('Update one record in the Database', function (done) {
        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Liu Kang' }).then(function () {
            MarioChar.findOne({ _id: char._id }).then(function (result) {
                assert(result.name === 'Liu Kang');
                done();
            });
        });
    });
    it ('Update weight by 1', function (done) {
        MarioChar.update({}, { $inc: { weight: 1 } }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (record) {
                assert(record.weight === 51);
                done();
            });
        });
    });
});
