var angular = require('angular');

var menuModule = require('./app/menu/index');
require('angular-ui-router');
require('angular-ui-bootstrap');

require('patternfly/dist/js/patternfly-settings');
require('dg-angular-patternfly-accessible/angular-patternfly');

var routesConfig = require('./routes');

var main = require('./app/main');
var lions = require('./app/lions/lions');

require('./index.css');
require('patternfly/dist/css/patternfly.css');
require('patternfly/dist/css/patternfly-additions.css');

angular
  .module('app', [menuModule, 'ui.router', 'patternfly.navigation', 'ui.bootstrap'])
  .config(routesConfig)
  .component('app', main)
  .component('lions', lions);
