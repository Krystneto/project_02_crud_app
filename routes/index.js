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
      var card = results[0];
      res.render('card', {
        title: 'Burst Card Gallery',
        card: card
      });
    });
  });
});

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
    group: req.body.group,
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
      res.json(result)
    });
  });
});


// Update a card page
router.get('/update', function(req, res, next) {
  res.render('update')
})


// Delete a card page
router.post('/delete', function(req, res, next) {
  var name = req.body.name;
  console.log(name);
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('card_set').remove({name: name});
    console.log(name);
    db.close();
    res.render('delete')
  })
})









router.get('/card/:name', function(req, res) {
  var name = req.params.name;
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('card_set').find({'name':name}).toArray(function(err, results){
      var card = results;
      res.json(card);
    })
  })
})



router.post('/update/:name', function(req, res, next) {

})





module.exports = router;
