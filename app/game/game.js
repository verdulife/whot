angular
  .module("app")
  .controller("gameController", function(
    $scope,
    $state,
    $stateParams,
    $timeout,
    $interval,
    server
  ) {
    info("Game loaded");

    $scope.back = () => $state.go("menu");
    $scope.getWhot = $stateParams.whot;
    $scope.game = {};
    let timer = $stateParams.time;

    let selectedWhot = server.db.collection("whots").doc($scope.getWhot);

    selectedWhot.get().then(doc => {
      $scope.$apply(() => {
        $scope.whot = doc.data();
        succ("Data obtained");
      });
    });

    document.getElementById("timer").innerHTML = "¡3!";
    $timeout(() => (document.getElementById("timer").innerHTML = "¡2!"), 1000);
    $timeout(() => (document.getElementById("timer").innerHTML = "¡1!"), 2000);

    $timeout(() => {
      document.getElementById("timer").innerHTML = timer;
      let random = Math.floor(Math.random() * $scope.whot.whots.length);
      $scope.random = $scope.whot.whots[random];

      $interval(() => {
        if (timer > 0) {
          timer -= 1;
          document.getElementById("timer").innerHTML = timer;
        } else {
          $timeout(
            () => (document.getElementById("timer").innerHTML = "¡Tiempo!"),
            100
          );
        }
      }, 1000);
    }, 3000);

    let wait = document.getElementById("wait");
    let hit = document.getElementById("hit");
    let pass = document.getElementById("pass");

    wait.style.display = "inherit";
    hit.style.display = "none";
    pass.style.display = "none";

    window.ondevicemotion = function(e) {
      let zAxis = (document.getElementById("accelerationZ").innerHTML =
        e.accelerationIncludingGravity.z);
      let random = Math.floor(Math.random() * $scope.whot.whots.length);
      let rigthWhots = [];
      let wrongWhots = [];

      if (zAxis <= -5) {
        let wrong = true;
        if(wrong = true) {
          wait.style.display = "none";
        hit.style.display = "none";
        pass.style.display = "inherit";
        $scope.random = $scope.whot.whots[random];
        }
      } else if (zAxis >= 4) {
        wait.style.display = "none";
        hit.style.display = "inherit";
        pass.style.display = "none";
        $scope.random = $scope.whot.whots[random];
      } else {
        wait.style.display = "inherit";
        hit.style.display = "none";
        pass.style.display = "none";
      }
    };
  });
