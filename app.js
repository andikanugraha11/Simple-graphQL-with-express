const express = require('express');
const expressGraphQl = require('express-graphql');
const morgan = require('morgan');

const app = express()


app.use(morgan('dev'));
app.use('/graphQL', expressGraphQl({
    graphiql: true,
    schema : {}
}))

app.listen(8080,()=>{
    console.log('Runnig at 8080')
});