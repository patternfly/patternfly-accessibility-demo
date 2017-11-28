module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
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
    })
    .state('app.article-summary', {
      url: 'article-summary',
      component: 'articleSummary'
    })
    .state('app.article-full', {
      url: 'article-full',
      component: 'articleFull'
    })
    .state('app.article-wolves', {
      url: 'article-wolves',
      component: 'articleWolves'
    })
    .state('app.article-sharks', {
      url: 'article-sharks',
      component: 'articleSharks'
    });
}
