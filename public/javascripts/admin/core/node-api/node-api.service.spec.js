/**
 * Created by yeoman generator-makrina:angular-core-service 0.4.1 for Node on 2/12/2016.
 */
'use strict';

describe('node', function() {
  var $httpBackend;
  var Object;
  var data = [];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Node` service before each test
  beforeEach(module('core.node'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Object_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/nodes').respond(data);
    Object = _Object_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the nodes data', function() {
    var objects = Object.query();
    expect(objects).toEqual([]);
    $httpBackend.flush();
    expect(objects).toEqual(data);
  });

});
