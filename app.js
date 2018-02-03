const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

//set storage engine

const storage = multer.diskStorage({
    destination: "./images",
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const upload = multer(
    {storage: storage}
).single('image');


const app = express();

//Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://piashsarker:piash12345@ds249415.mlab.com:49415/ninja_rest_api', {
    useMongoClient: true
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.static('./images'));

app.use(bodyParser.json());


app.post('/ninja/upload/image', function (req , res){
    upload(req , res , (error)=>{
        if(error){
            res.send("Error");
        }
        else {
            res.send("Sucess");
        }
    });

});

//initialize routes
app.use('/api', routes);
// error handling middleware
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({error: err.message});
});




//PORT & Listen for request
//listen to port
const port = process.env.PORT ;
//const port = 9090;
app.listen(port);
console.log("PORT: " + port);

