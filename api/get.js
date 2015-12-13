var Jade = require('jade');
var path = require('path');
var assign = require('object-assign');
var config = require('../config');

module.exports = function (app) {
  app.get('/', function(req, res){

    var categories = [
      {
        name:        'Home & Gardening',
        description: 'Home and Gardening tools',
        link:        config.site_url + '/home'
      },
      {
        name:        'Power Tools',
        description: 'Power tools you can\'t use',
        link:        config.site_url + '/tools'
      }
    ];

    var fn = Jade.compileFile('./templates/index.jade');

    var html = fn({categories: categories});

    return res.send(html);

  });
};
