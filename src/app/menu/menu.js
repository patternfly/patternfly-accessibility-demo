module.exports = {
  template: require('./menu.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController() {
  var vm = this;

  vm.navigationItems = [
    {
      title: 'Science',
      iconClass: 'fa fa-paper-plane',
      children: [
        {
          title: 'Environment Science',
          uiSref: 'app'
        }, {
          title: 'Physical Science',
          uiSref: 'app'
        }, {
          title: 'Innovation',
          uiSref: 'app'
        }, {
          title: 'Life Science',
          uiSref: 'app'
        }, {
          title: 'Engineering',
          uiSref: 'app'
        }, {
          title: 'Science vs. Myth',
          uiSref: 'app'
        }
      ]
    }, {
      title: 'Home & Garden',
      iconClass: 'fa fa-envira',
      children: [
        {
          title: 'Home Improvement',
          uiSref: 'app'
        }, {
          title: 'Lawn & Garden',
          uiSref: 'app'
        }, {
          title: 'Stain Removal',
          uiSref: 'app'
        }, {
          title: 'Green Living',
          uiSref: 'app'
        }
      ]
    }, {
      title: 'Technology',
      iconClass: 'fa fa-space-shuttle',
      children: [
        {
          title: 'Computers',
          uiSref: 'app'
        }, {
          title: 'Electronics',
          uiSref: 'app'
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
          uiSref: 'app'
        }, {
          title: 'People',
          uiSref: 'app'
        }
      ]
    }
  ];
}
