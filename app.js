const express = require('express');
const expressGraphQl = require('express-graphql');
const morgan = require('morgan');
const mongoose = require('mongoose')
const databases = require('./config/database');
const schema = require('./graphQL/schema');

const app = express()

mongoose.connect(databases.database, { useNewUrlParser: true });
mongoose.connection.on('connected', ()=>{
    console.log('Database Connect')
});
mongoose.connection.on('error', (err)=>{
    console.log(`Database error: ${err}`)
})


app.use(morgan('dev'));
app.use('/graphQL', expressGraphQl({
    schema : schema,
    graphiql: true
    
}))

app.listen(8080,()=>{
    console.log('Runnig at 8080')
});