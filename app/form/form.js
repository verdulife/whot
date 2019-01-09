angular
  .module("app")
  .controller("formController", function($scope, $state, $stateParams, server) {
    info("Form loaded");

    $scope.back = () => $state.go("menu");
    $scope.getWhot = $stateParams.whot;

    $scope.whot = {};
    $scope.whot.whots = [];

    $scope.addWhot = newWhot => {
      $scope.whot.whots.push(newWhot);
      $scope.newWhot = null;
    };

    $scope.delWhot = key => {
      $scope.whot.whots.splice(key, 1);
    };

    //know if is open form or new form
    if ($stateParams.whot !== null) {
      let selectedWhot = server.db.collection("whots").doc($scope.getWhot);

    selectedWhot.get().then(doc => {
      $scope.$apply(() => {
        $scope.whot = doc.data();
        succ("Data obtained");
      });
    });

      //update whot
      $scope.pushWhot = whot => {
        server.db
          .collection("whots")
          .doc($stateParams.whot)
          .set(whot)
          .then(() => {
            succ("Whot updated");
            $state.go("menu");
          });
      };

    } else {

      //new whot
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
    }
  });
