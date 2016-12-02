/**
 * Created by yeoman generator-makrina:angular-component-detail 0.4.1 on 2/12/2016.
 */

angular
  .module('nodeDetail')
  .component('nodeDetail', {
    templateUrl: 'javascripts/admin/node-api-detail/node-api-detail.template.html',
    controller: ['$routeParams', '$scope', 'Node',
      function NodeDetailController($routeParams, $scope, Node) {
        var self = this;

        self.getNode = function () {
          self.node = Node.getAndNotify({
            getId: {nodeId: self.nodeId},
            url: '/node-apis',
            error404: {
              title: 'Node not found',
              body: 'The node cannot be found.'
            }
          });
        };

        if ($routeParams.nodeId != 'add') {
          self.nodeId = $routeParams.nodeId;
          self.getNode();
        }
        else self.node = {
          // default values
        };

        // Here populate combo boxes

        self.submitNode = function() {
          self.node = Node.submitAndNotify({
            id: self.nodeId,
            entity: self.node,
            form: self.nodeEdit,
            url: '/node-apis/',
            success: {
              title: 'Node saved',
              body: 'Node saved successfully.'
            },
            error: {
              title: 'Node not saved',
              conflict409: 'Node already exists'
            },
            callbacks: {next: self.getNode}
          });
        };

        self.deleteNode = function() {
          Node.deleteAndNotify({
            getId: {nodeId: self.nodeId},
            url: '/node-apis',
            success: {
              title: 'Node deleted',
              body: 'Node deleted successfully.'
            },
            error: {title: 'Node not deleted'}
          });
        };

        // select2();
      }
    ]
  });
