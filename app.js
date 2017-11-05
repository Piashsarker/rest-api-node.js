const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express() ;

//Connecting mongoDB
mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://localhost/ninjago',{
  useMongoClient : true
});


app.use(bodyParser.json());
//initialize routes
app.use('/api',routes);
// error handling middleware
app.use(function(err, req , res , next){
  console.log(err);
  res.status(422).send({error: err.message});
})



//PORT & Listen for request
app.listen(process.env.port || 4000 , function(){
  console.log('SERVER LISTENING PORT : '+(process.env.port || 4000));
});
