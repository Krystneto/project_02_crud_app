var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/BURST';

router.get('/', function(req, res, next) {
  res.render('card', {title: 'Burst Card Gallery'})
})

router.get('/create-a-card', function(req, res, next) {

})

router.get('/update', function(req, res, next) {

})

router.get('/delete', function(req, res, next) {

})

router.get('/update/:name', function(req, res, next) {

})

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
  }
})



module.exports = router;
