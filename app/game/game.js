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
    let time = 10;
    let timer = document.getElementById("timer");
    let zAxis = document.getElementById("accelerationZ");

    timer.innerHTML = "Preparate";

    let selectedWhot = server.db.collection("whots").doc($scope.getWhot);
    selectedWhot.get().then(doc => {
      $scope.$apply(() => {
        $scope.whot = doc.data();
        succ("Data obtained");

        $timeout(() => ($scope.message = "Preparados..."));
        $timeout(() => ($scope.message = "Listos..."), 1000);
        $timeout(() => ($scope.message = "¡Ya!"), 2000);

        let countDown = $timeout(() => {
          let random = Math.floor(Math.random() * $scope.whot.whots.length);
          $scope.message = $scope.whot.whots[random];
          timer.innerHTML = time;

          $interval(() => {
            if (time > 0) {
              time -= 1;
              timer.innerHTML = time;
            } else {
              $timeout(() => (timer.innerHTML = "¡Tiempo!"), 100);
              $timeout(() => ($scope.message = rigthWhots));
            }
          }, 1000);
        }, 3000);

        let rightState = false;
        let wrongState = false;

        let rightFn = () => {
          rightState = true;
          wrongState = false;

          if (rightState === true) {
            let random = Math.floor(Math.random() * $scope.whot.whots.length);
            $scope.message = "¡Correcto!";
            $timeout(() => ($scope.message = $scope.whot.whots[random]), 1000);
            rigthWhots.push($scope.whot.whots[random]);
          }

          let saveFn = rightFn;

          $timeout(() => {
            rightFn = saveFn;
          }, 1500);

          rightFn = null;
        };

        let wrongFn = () => {
          rightState = false;
          wrongState = true;

          if (wrongState === true) {
            let random = Math.floor(Math.random() * $scope.whot.whots.length);
            $scope.message = "Paso...";
            $timeout(() => ($scope.message = $scope.whot.whots[random]), 1000);
            wrongWhots.push($scope.whot.whots[random]);
          }

          let saveFn = wrongFn;

          $timeout(() => {
            wrongFn = saveFn;
          }, 1500);

          worngFn = null;
        };

        let rigthWhots = [];
        let wrongWhots = [];

        window.ondevicemotion = function(e) {
          zAxis.innerHTML = e.accelerationIncludingGravity.z;
          let zDeg = e.accelerationIncludingGravity.z;

          if (zDeg >= 4) {
            rightFn();
          } else if (zDeg <= -5) {
            wrongFn();
          }
        };
      });
    });
  });
