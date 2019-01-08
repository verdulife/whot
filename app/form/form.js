angular.module("app").controller("formController", function($scope, $state) {
  info("Form loaded");

  $scope.back = () => $state.go("menu");
;});