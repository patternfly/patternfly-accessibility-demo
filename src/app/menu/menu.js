module.exports = {
  template: require('./menu.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController() {
  var vm = this;

  vm.navigationItems = [
    {
      title: 'Dashboard',
      iconClass: 'fa fa-dashboard',
      uiSref: 'app.lions'
    },
    {
      title: 'Dolor',
      iconClass: 'fa fa-shield',
      uiSref: 'app.lions'
    },
    {
      title: 'Ipsum',
      iconClass: 'fa fa-space-shuttle',
      children: [
        {
          title: 'Intellegam',
          children: [
            {
              title: 'Recteque',
              href: '#/ipsum/intellegam/recteque',
              badges: [
                {
                  count: 6,
                  tooltip: 'Total number of error items',
                  badgeClass: 'example-error-background'
                }
              ]
            },
            {
              title: 'Suavitate',
              href: '#/ipsum/intellegam/suavitate',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of items'
                }
              ]
            },
            {
              title: 'Vituperatoribus',
              href: '#/ipsum/intellegam/vituperatoribus',
              badges: [
                {
                  count: 18,
                  tooltip: 'Total number of warning items',
                  badgeClass: 'example-warning-background'
                }
              ]
            }
          ]
        },
        {
          title: 'Copiosae',
          children: [
            {
              title: 'Exerci',
              href: '#/ipsum/copiosae/exerci',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of error items',
                  iconClass: 'pficon pficon-error-circle-o'
                },
                {
                  count: 6,
                  tooltip: 'Total number warning error items',
                  iconClass: 'pficon pficon-warning-triangle-o'
                }
              ]
            },
            {
              title: 'Quaeque',
              href: '#/ipsum/copiosae/quaeque',
              badges: [
                {
                  count: 0,
                  tooltip: 'Total number of error items',
                  iconClass: 'pficon pficon-error-circle-o'
                },
                {
                  count: 4,
                  tooltip: 'Total number warning error items',
                  iconClass: 'pficon pficon-warning-triangle-o'
                }
              ]
            },
            {
              title: 'Utroque',
              href: '#/ipsum/copiosae/utroque',
              badges: [
                {
                  count: 1,
                  tooltip: 'Total number of error items',
                  iconClass: 'pficon pficon-error-circle-o'
                },
                {
                  count: 2,
                  tooltip: 'Total number warning error items',
                  iconClass: 'pficon pficon-warning-triangle-o'
                }
              ]
            }
          ]
        },
        {
          title: 'Patrioque',
          children: [
            {
              title: 'Novum',
              href: '#/ipsum/patrioque/novum',
              badges: [
                {
                  count: 6,
                  tooltip: 'Total number of error items',
                  badgeClass: 'example-error-background'
                }
              ]
            },
            {
              title: 'Pericula',
              href: '#/ipsum/patrioque/pericula'
            },
            {
              title: 'Gubergren',
              href: '#/ipsum/patrioque/gubergren'
            }
          ]
        },
        {
          title: 'Accumsan',
          href: '#/ipsum/Accumsan',
          badges: [
            {
              count: 2,
              tooltip: 'Total number of error items',
              iconClass: 'pficon pficon-error-circle-o'
            },
            {
              count: 6,
              tooltip: 'Total number warning error items',
              iconClass: 'pficon pficon-warning-triangle-o'
            }
          ]
        }
      ]
    },
    {
      title: 'Amet',
      iconClass: 'fa fa-paper-plane',
      children: [
        {
          title: 'Detracto',
          children: [
            {
              title: 'Delicatissimi',
              href: '#/amet/detracto/delicatissimi',
              badges: [
                {
                  count: 6,
                  tooltip: 'Total number of error items',
                  badgeClass: 'example-error-background'
                }
              ]
            },
            {
              title: 'Aliquam',
              href: '#/amet/detracto/aliquam',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of items'
                }
              ]
            },
            {
              title: 'Principes',
              href: '#/amet/detracto/principes',
              badges: [
                {
                  count: 18,
                  tooltip: 'Total number of warning items',
                  badgeClass: 'example-warning-background'
                }
              ]
            }
          ]
        },
        {
          title: 'Mediocrem',
          children: [
            {
              title: 'Convenire',
              href: '#/amet/mediocrem/convenire',
              badges: [
                {
                  count: 6,
                  tooltip: 'Total number of error items',
                  badgeClass: 'example-error-background'
                }
              ]
            },
            {
              title: 'Nonumy',
              href: '#/amet/mediocrem/nonumy',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of items'
                }
              ]
            },
            {
              title: 'Deserunt',
              href: '#/amet/mediocrem/deserunt',
              badges: [
                {
                  count: 18,
                  tooltip: 'Total number of warning items',
                  badgeClass: 'example-warning-background'
                }
              ]
            }
          ]
        },
        {
          title: 'Corrumpit',
          children: [
            {
              title: 'Aeque',
              href: '#/amet/corrumpit/aeque',
              badges: [
                {
                  count: 6,
                  tooltip: 'Total number of error items',
                  badgeClass: 'example-error-background'
                }
              ]
            },
            {
              title: 'Delenit',
              href: '#/amet/corrumpit/delenit',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of items'
                }
              ]
            },
            {
              title: 'Qualisque',
              href: '#/amet/corrumpit/qualisque',
              badges: [
                {
                  count: 18,
                  tooltip: 'Total number of warning items',
                  badgeClass: 'example-warning-background'
                }
              ]
            }
          ]
        },
        {
          title: 'Urbanitas',
          href: '#/amet/urbanitas',
          badges: [
            {
              count: 2,
              tooltip: 'Total number of error items',
              iconClass: 'pficon pficon-error-circle-o'
            },
            {
              count: 6,
              tooltip: 'Total number warning error items',
              iconClass: 'pficon pficon-warning-triangle-o'
            }
          ]
        }
      ]
    },
    {
      title: 'Adipscing',
      iconClass: 'fa fa-graduation-cap',
      href: '#/adipscing'
    },
    {
      title: 'Lorem',
      iconClass: 'fa fa-gamepad',
      href: '#/lorem'
    }];
}
