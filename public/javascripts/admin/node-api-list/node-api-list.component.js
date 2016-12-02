/**
 * Created by yeoman generator-makrina:angular-component-list 0.4.1 on 2/12/2016.
 */

angular
  .module('nodeList')
  .component('nodeList', {
    templateUrl: 'javascripts/admin/node-api-list/node-api-list.template.html',
    bindings: {
      'viewLink': '@',
      'viewLimit': '@'
    },
    controller: ['Node',
      function NodeListController(Node) {
        this.nodes = Node.query();
      }
    ]
  });
