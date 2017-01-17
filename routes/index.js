var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

var url = 'mongodb://localhost:27017/BURST';

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Burst Card Gallery'})
})











module.exports = router;
