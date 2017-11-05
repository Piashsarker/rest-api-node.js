const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from a database
router.get('/ninjas', function(req, res,next){
    Ninja.find({}).then(function(ninjas){
      res.send(ninjas);
    });
});

router.get('/ninjas_by_location',function(req, res , next){
    Ninja.geoNear({
      type:'Point',coordinates:
        [ parseFloat(req.query.lng),
          parseFloat(req.query.lat)
        ]
      },
      {maxDistance: 100000 , spherical:true}).then(function(ninjas){
        res.send(ninjas);
      }).catch(next);
});


// add a new ninja to database
router.post('/ninjas', function(req, res,next){
  console.log(req.body);
  //Saving in database and sending the response .
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);


});

//update a ninja in the database
router.put('/ninjas/:id', function(req, res,next){
   Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
       Ninja.findOne({_id: req.params.id}).then(function(ninja){
         res.send(ninja);
       }).catch(next);

     });
});

// delete a ninja from the database
router.delete('/ninjas/:id', function(req, res,next){
  console.log("DELETE Request ID : "+req.params.id);

  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send(ninja);
  }).catch(next);

});


module.exports= router ;
