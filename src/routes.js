module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.wild-animals', {
      url: 'wild-animals',
      component: 'wildAnimals'
    })
    .state('app.pets', {
      url: 'pets',
      component: 'pets'
    })
    .state('app.endangered-species', {
      url: 'endangered-species',
      component: 'endangeredSpecies'
    })
    .state('app.dodos', {
      url: 'dodos',
      component: 'extinctAnimals'
    });
}
