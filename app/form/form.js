angular
  .module("app")
  .controller("formController", function($scope, $state, server) {
    info("Form loaded");

    $scope.back = () => $state.go("menu");

    $scope.whot = {};
    $scope.whot.whots = [];

    $scope.addWhot = newWhot => {
      $scope.whot.whots.push(newWhot);
      $scope.newWhot = null;
    };

    $scope.delWhot = key => {
      $scope.whot.whots.splice(key, 1);
    };

    $scope.pushWhot = whot => {
      let now = new Date();
      whot._created = now;
      server.db
        .collection("whots")
        .add(whot)
        .then(() => {
          succ("Whot created successfully");
          $state.go("menu");
        });
    };
  });
