var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/Burst';

// Home Page
router.get('/', function(req, res, next) {
  mongo.connect(url, function(err, db) {
    db.collection('card_set').find({}).toArray(function(err, results) {
    assert.equal(null, err);
    console.log('Pulling cards from card_set collection');
    db.close();
    });
  });
  res.render('card', {
    title: 'Burst Card Gallery',
    name: results.name,
    spot_number: results.spot_number,
    spot_type: results.spot_type,
    aura: results.aura,
    type: results.type,
    class: results.class,
    ability: results.ability,
    burst: results.burst,
    attack: results.attack,
    defense: results.defense,
  })
})

// Create a card page
router.get('/create-a-card', function(req, res, next) {
  res.render('create');
})

// Insert card information into database
router.post('/insert_card', function(req, res, next) {
  var card = {
    name: req.body.name,
    spot_number: req.body.spot_number,
    spot_type: req.body.spot_type,
    aura: req.body.aura,
    type: req.body.type,
    class: req.body.class,
    ability: req.body.ability,
    burst: req.body.burst,
    attack: req.body.attack,
    defense: req.body.defense,
  };
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('card_set').insertOne(card, function(err, result){
      assert.equal(null, err);
      console.log(card.name + 'inserted into the card_set');
      db.close();
    })
  })
});


// Update a card page
router.get('/update', function(req, res, next) {
  res.render('update')
})

// Delete a card page
router.get('/delete', function(req, res, next) {
  res.render('delete')
})

router.get('/')


router.post('/update/:name', function(req, res, next) {

})





module.exports = router;
