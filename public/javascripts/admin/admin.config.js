/**
 * Created by yeoman generator-makrina:angular-app 0.4.1 on 2/12/2016.
 */

angular
  .module('myMakrinaAdminApp')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/dashboard', {
          template: '<dashboard></dashboard>'
        })
        .when('/node-apis', {
          template: '<node-api-list></node-api-list>'
        })
        .when('/node-apis/:nodeId', {
          template: '<node-api-detail></node-api-detail>'
        })
        .otherwise('/dashboard');
    }
  ]);
