require('dotenv');
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/sandbox';

// Home Page
router.get('/', function(req, res, next) {
  mongo.connect(url, function(err, db) {
    db.collection('card_set').find({}).toArray(function(err, results) {
      assert.equal(null, err);
      console.log('Pulling cards from card_set collection');
      res.render('card', {
        card: results
      });
        db.close();
    });
  });
});

// Create a card page
router.get('/cards', function(req, res, next) {
  res.render('create');
})

// Insert card information into database
router.post('/cards', function(req, res) {
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
      console.log(card.name + ' inserted into the card_set');
      db.close();
      res.json({status: 200})
    });
  });
});


// render update.hbs page
router.get('/update/:name', function(req, res, next) {
  var name = req.params.name
  mongo.connect(url, function(err, db) {
    db.collection('card_set').find({name: name}).toArray(function(err, results){
      assert.equal(null, err);
      console.log('searching for ' + results[0].name);
      res.render('update', {card: results[0]});
      db.close();
    });
  });
});

// post request from update button
router.post('/edit', function(req, res) {
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
    db.collection('card_set').updateOne({name:card.name},{$set:card},
     function(err, result) {
      assert.equal(null, err);
      console.log(card.name + ' updated into the card_set');
      db.close();
      res.json({status: 200})
    });
  });
});


// Delete a card page
router.post('/delete', function(req, res, next) {
  var name = req.body.name;
  console.log(name);
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('card_set').remove({name: name});
    db.close();
    res.render('card')
  })
})






module.exports = router;
