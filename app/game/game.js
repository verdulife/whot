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
    let time = $stateParams.time;
    let timer = document.getElementById("timer");
    let zAxis = document.getElementById("accelerationZ");

    timer.innerHTML = "Preparate";

    let selectedWhot = server.db.collection("whots").doc($scope.getWhot);
    selectedWhot.get().then(doc => {
      $scope.$apply(() => {
        $scope.whot = doc.data();
        succ("Data obtained");

        $timeout(() => $scope.message = "Preparados...");
        $timeout(() => $scope.message = "Listos...", 1000);
        $timeout(() => $scope.message = "¡Ya!", 2000);

        let countDown = $timeout(() => {
          let random = Math.floor(Math.random() * $scope.whot.whots.length);
          $scope.message = $scope.whot.whots[random];
          timer.innerHTML = time;

          $interval(() => {
            if (time > 0) {
              time -= 1;
              timer.innerHTML = time;
            } else {
              $timeout(
                () => (timer.innerHTML = "¡Tiempo!"),
                100
              );
            }
          }, 1000);

        }, 3000);

        window.ondevicemotion = function(e) {
          zAxis.innerHTML = e.accelerationIncludingGravity.z;
          let random = Math.floor(Math.random() * $scope.whot.whots.length);
          let rigthWhots = [];
          let wrongWhots = [];

          if (zAxis <= -5) {
            let wrong = true;
            if ((wrong = true)) {
              wait.style.display = "none";
              hit.style.display = "none";
              pass.style.display = "inherit";
              $scope.message = $scope.whot.whots[random];
            }
          } else if (zAxis >= 4) {
            wait.style.display = "none";
            hit.style.display = "inherit";
            pass.style.display = "none";
            $scope.message = $scope.whot.whots[random];
          } else {
            wait.style.display = "inherit";
            hit.style.display = "none";
            pass.style.display = "none";
          }
        };
      });
    });
  });
