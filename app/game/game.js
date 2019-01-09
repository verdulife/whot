angular
  .module("app")
  .controller("gameController", function(
    $scope,
    $state,
    $stateParams
  ) {
    info("Game loaded");

    $scope.back = () => $state.go("menu");
    $scope.getWhot = $stateParams.whot;
    $scope.game = {};
  });
