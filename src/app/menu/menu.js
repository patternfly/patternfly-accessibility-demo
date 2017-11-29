module.exports = {
  template: require('./menu.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController($rootScope, $scope) {
  var vm = this;

  vm.navigationItems = [
    {
      title: 'Science',
      iconClass: 'fa fa-paper-plane',
      children: [
        {
          title: 'Environment Science',
          uiSref: 'app.article-summary'
        }, {
          title: 'Physical Science',
          uiSref: 'app.article-summary'
        }, {
          title: 'Innovation',
          uiSref: 'app.article-summary'
        }, {
          title: 'Life Science',
          uiSref: 'app.article-summary'
        }, {
          title: 'Engineering',
          uiSref: 'app.article-summary'
        }, {
          title: 'Science vs. Myth',
          uiSref: 'app.article-summary'
        }
      ]
    }, {
      title: 'Home & Garden',
      iconClass: 'fa fa-envira',
      children: [
        {
          title: 'Home Improvement',
          uiSref: 'app.article-summary'
        }, {
          title: 'Lawn & Garden',
          uiSref: 'app.article-summary'
        }, {
          title: 'Stain Removal',
          uiSref: 'app.article-summary'
        }, {
          title: 'Green Living',
          uiSref: 'app.article-summary'
        }
      ]
    }, {
      title: 'Technology',
      iconClass: 'fa fa-space-shuttle',
      children: [
        {
          title: 'Computers',
          uiSref: 'app.article-summary'
        }, {
          title: 'Electronics',
          uiSref: 'app.article-summary'
        }
      ]
    }, {
      title: 'Animals',
      iconClass: 'fa fa-hand-o-right',
      children: [
        {
          title: 'Wild Animals',
          uiSref: 'app.wild-animals'
        }, {
          title: 'Pets',
          uiSref: 'app.pets'
        }, {
          title: 'Endangered Species',
          uiSref: 'app.endangered-species'
        }, {
          title: 'Extinct Animals',
          uiSref: 'app.dodos'
        }
      ]
    }, {
      title: 'Culture',
      iconClass: 'fa fa-child',
      children: [
        {
          title: 'History',
          uiSref: 'app.article-summary'
        }, {
          title: 'People',
          uiSref: 'app.article-summary'
        }
      ]
    }
  ];

  var listener = $rootScope.$on('$stateChangeSuccess', function () {
    // eslint-disable-next-line angular/document-service
    var element = document.getElementById('container');
    if (element) {
      element.focus();
    }
  });

  vm.touchScreenEnabled = false;

  vm.toggleTouchScreen = function () {
    vm.touchScreenEnabled = !vm.touchScreenEnabled;
  };

  vm.scrollToMain = function () {
    // eslint-disable-next-line angular/document-service
    var element = document.getElementById('container');
    if (element) {
      element.focus();
    }
  };

  $scope.$on('$destroy', listener);
}
