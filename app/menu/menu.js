angular.module("app").controller("menuController", function($scope, $state, server) {
  info("Menu loaded");

  //get data from database
  server.db
    .collection("whots")
    .get()
    .then(snap => {
      let data = [];
      snap.forEach(doc => {
        let values = doc.data();
        values.id = doc.id;
        data.push(values);
      });
      $scope.$apply(() => {
        $scope.cards = data;
        succ(`Data obtained`);
      });
    });

  $scope.reload = () => $state.reload();
});
