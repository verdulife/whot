app.config(($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) => {
  $ocLazyLoadProvider.config({
    debug: false,
    events: false
  });

  $urlRouterProvider.otherwise("/home");

  //HOME
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
  
  //MENU
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
  
  //FORM
  $stateProvider.state("form", {
    name: "form",
    url: "/form",
    controller: "formController",
    templateUrl: "./app/form/form.html",
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/form.css"
          },
          {
            href: "./assets/css/m.form.css",
            media: "screen and (max-width : 768px)"
          }
        ]);
      },
      loadCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/form.js");
      }
    }
  });

  //OPTIONS
  $stateProvider.state("options", {
    name: "options",
    url: "/options/:whot",
    params: { whot: null },
    controller: "optionsController",
    templateUrl: "./app/options/options.html",
    resolve: {
      loadCss: $css => {
        return $css.add([
          {
            href: "./assets/css/options.css"
          },
          {
            href: "./assets/css/m.options.css",
            media: "screen and (max-width : 768px)"
          }
        ]);
      },
      loadCtrl: $ocLazyLoad => {
        return $ocLazyLoad.load("./assets/js/options.js");
      }
    }
  });
});
