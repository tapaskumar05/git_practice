const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// User Id - tapaskumar
// Password - tapas.kumar
// User email - tapas.kumar@lyearn.com

mongoose.connect('mongodb+srv://tapaskumar:tapas.kumar@cluster0-4ni6g.mongodb.net/test?retryWrites=true');
mongoose.connection.once('open', () => {
    console.log('\u001b[1;36m Connected to DB');
}).on('error', () => {
    console.log('\u001b[1;31m Error occured', error);
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log('App listening on Port 5000....');
});