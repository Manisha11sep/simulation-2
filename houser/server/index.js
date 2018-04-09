const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive');
require('dotenv').config()
const PORT=5000
const app = express();
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );


app.get( '/api/house',controller.getAll );
app.post('/api/house', controller.create);
app.delete('/api/house/:id', controller.delete);


app.listen(PORT, ()=> console.log(`you are running on : ${PORT}`))