angular
  .module("app")
  .controller("optionsController", function($scope, $state, $stateParams, server) {
    info("Options loaded");

    $scope.back = () => $state.go("menu");
    $scope.getWhot = $stateParams.whot;
    $scope.game = {};

    let selectedWhot = server.db.collection("whots").doc($scope.getWhot);

    selectedWhot.get().then(doc => {
      $scope.$apply(() => {
        $scope.whot = doc.data();
        succ("Data obtained");
        
        $scope.game.time = "60";
      });
    });

    
  });
