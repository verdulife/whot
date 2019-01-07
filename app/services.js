app.factory("server", () => {
  let server = {};
  server.auth = firebase.auth();
  server.db = firebase.firestore();
  server.db.settings({ timestampsInSnapshots: true });
  server.userState;
  server.user = {};

  server.state = state => {
    server.userState = state;
  };

  server.auth.onAuthStateChanged(user => {
    if (user) {
      server.userState = true;
      server.user = user;
    } else {
      server.userState = false;
      server.user = null;
    }
  });

  return server;
});

/* app.factory("toaster", $timeout => {
  let toast = function toaster(log, timer) {
    $("body").append("<div class='toaster' style='position:fixed;top:20px;right:20px;padding:20px 30px;background:rgba(0, 0, 0, 0.9);color:#fff;-webkit-animation:fromRight .3s ease-out;animation:fromRight .3s ease-out;z-index:999'>" + log + "</>");
    $timeout(() => {
      $(".toaster").fadeOut("fast");
    }, timer);
  };

  return toast;
}); */
