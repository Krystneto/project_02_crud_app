var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/BURST';

router.get('/', function(req, res, next) {
  res.render('card', {title: 'Burst Card Gallery'})
})











module.exports = router;
