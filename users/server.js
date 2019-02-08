const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true // only intended to be used in dev env
}));

app.listen(4000, () => {
    console.log('Listening');
});