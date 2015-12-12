var Jade = require('jade');
var path = require('path');
var assign = require('object-assign');
var config = require('../config');

module.exports = function (app) {
  app.get('/', function(req, res){
    res.send('Hello World!');
  });
};
