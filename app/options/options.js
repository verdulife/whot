angular
  .module("app")
  .controller("optionsController", function(
    $scope,
    $state,
    $stateParams,
    server
  ) {
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

    $scope.deleteWhot = () => {
      let sure = confirm("¿Borrar para siempre?");
      if (sure === true) {
        server.db
          .collection("whots")
          .doc($scope.getWhot)
          .delete()
          .then(() => {
            succ("Whot successfully deleted");
            $state.go("menu");
          })
          .catch(err => {
            warn(`Error removing document: ${err}`);
          });
      }
    };

    $scope.editWhot = () => {
      $state.go("form", { whot: $scope.getWhot });
    };

    $scope.play = game => {
      $state.go("game", { whot: $scope.getWhot, time: game.time });
    };
  });
