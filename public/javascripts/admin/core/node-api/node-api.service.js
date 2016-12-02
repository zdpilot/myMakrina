/**
 * Created by yeoman generator-makrina:angular-core-service 0.4.1 for Node on 2/12/2016.
 */

angular
  .module('core.node')
  .factory('Node', ['gaResource',
    function ($resource) {
      return $resource('api/node-apis');
    }
  ]);
