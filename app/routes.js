app.config(($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) => {
  $ocLazyLoadProvider.config({
    debug: false,
    events: false
  });

  $urlRouterProvider.otherwise("/home");

  $stateProvider.state("home", {
    name: "home",
    url: "/home",
    controller: "homeController",
    templateUrl: "./app/home/home.html",
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/home.css"
          },
          {
            href: "./assets/css/m.home.css",
            media: "screen and (max-width : 768px)"
          }
        ]);
      },
      loadCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/home.js");
      }
    }
  });
  
  $stateProvider.state("menu", {
    name: "menu",
    url: "/menu",
    controller: "menuController",
    templateUrl: "./app/menu/menu.html",
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/menu.css"
          },
          {
            href: "./assets/css/m.menu.css",
            media: "screen and (max-width : 768px)"
          }
        ]);
      },
      loadCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/menu.js");
      }
    }
  });
});
