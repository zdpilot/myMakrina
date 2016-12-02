/**
 * Created by yeoman generator-makrina:angular-component-detail 0.4.1 on 2/12/2016.
 */

describe('nodeDetail', function() {
  beforeEach(module('nodeDetail'));

  describe('NodeDetailController', function() {
    var $httpBackend, ctrl, node;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      node = {};
      $httpBackend
        .expectGET('api/node-apis?nodeId=2')
        .respond(node);
      ctrl = $componentController('nodeDetail', {$routeParams: {nodeId: '2'}});
    }));

    it('should fetch a `node` model detail', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.node).toEqual({});
      $httpBackend.flush();
      expect(ctrl.node).toEqual(node);
    });
  });
});
