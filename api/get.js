var Jade = require('jade');
var path = require('path');
var assign = require('object-assign');
var config = require('../config');

var categories = require('../statics/categories');

module.exports = function (app) {
  app.get('/', function(req, res){

    var fn = Jade.compileFile('./templates/index.jade');

    var html = fn({categories: categories});

    return res.send(html);

  });

  app.get('/:id', function(req, res){

    var fn = Jade.compileFile('./templates/items.jade');
    var html = fn({items: categories[req.params.id].items});

    return res.send(html);

  });

};
