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
