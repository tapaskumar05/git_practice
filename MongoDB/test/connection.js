const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

//Connect to Database before tests run
before (function (done) {
    // Connect to mongoDB
    mongoose.connect('mongodb://localhost/testdb');
    mongoose.connection.once('open', function () {
        // console.log('Connection has been made...');
        // console.log('%c Connection has been made... ', 'background: #fff; color: orange');
        console.log( "\u001b[1;34m Connection has been made..." );
        done();
    }).on('error', function (error) {
        console.log('Connection Error', error);
    });
});

// Drop the characters collection before each test
beforeEach (function (done) {
    //Drop the collection
    // console.log( "\u001b[1;36m Dropping mariochar db" );
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });
});
