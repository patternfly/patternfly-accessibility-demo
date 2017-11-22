var angular = require('angular');

var menu = require('./menu');

var menuModule = 'menu';

module.exports = menuModule;

angular
  .module(menuModule, [])
  .component('pfMenu', menu);
