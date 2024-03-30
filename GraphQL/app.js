const express = require('express');
//import the express-graphQL
const expressGraphQL = require ('express-graphql').graphqlHTTP;
//import the Schema
const schema = require('./schema/Schema');

const app = express();

const port = 4600;

app.use('/graphql', expressGraphQL({
    graphiql : true,
    schema 
}));

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})