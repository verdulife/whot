angular
  .module("app")
  .controller("gameController", function($scope, $state, $stateParams) {
    info("Game loaded");

    $scope.back = () => $state.go("menu");
    $scope.getWhot = $stateParams.whot;
    $scope.game = {};

    window.ondevicemotion = function(e) {
      let zAxis = (document.getElementById("accelerationZ").innerHTML =
        e.accelerationIncludingGravity.z);

      if (zAxis <= -5) {
        document.getElementById("wait").style.display = "none";
        document.getElementById("front").style.display = "none";
        document.getElementById("back").style.display = "inherit";
      } else if (zAxis >= 5) {
        document.getElementById("wait").style.display = "none";
        document.getElementById("front").style.display = "inherit";
        document.getElementById("back").style.display = "none";
      } else {
        document.getElementById("wait").style.display = "inherit";
        document.getElementById("front").style.display = "none";
        document.getElementById("back").style.display = "none";
      }
    };
  });
