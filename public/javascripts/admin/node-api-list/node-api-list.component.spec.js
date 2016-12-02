/**
 * Created by yeoman generator-makrina:angular-component-list 0.4.1 on 2/12/2016.
 */

describe('nodeList', function() {
  beforeEach(module('nodeList'));

  describe('NodeListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      var nodesData = [];
      $httpBackend
        .expectGET('api/nodes')
        .respond(nodesData);
      ctrl = $componentController('nodeList');
    }));

    it('should create a `nodes` model with 2 nodes', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.nodes).toEqual([]);
      $httpBackend.flush();
      expect(ctrl.nodes.length).toBe(2);
    });
  });
});
