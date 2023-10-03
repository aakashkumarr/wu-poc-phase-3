//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      // 'app/lib/new/angular-mocks.js',
      // 'app/lib/new/angular-route.min.js',
      // 'app/lib/new/angular.min.js',
      
      'lib/angular-route/angular-route.js',
      'lib/angular-route/angular-route.min.js',
      'lib/angular-mocks/angular-mocks.js',
      'app.js',
      'settings/search/**/*.js',
      'settings/**/*.js',
      'layouts/**/*.js'
  
      // 'settings/search/search.component.js',
      // 'settings/search/search.module.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    client: {
      jasmine: {
        random: false,
        helpers: [], 
        spec_dir: "spec",
        
      }
    }

  });
};
