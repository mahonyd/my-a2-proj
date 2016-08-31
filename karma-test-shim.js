// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

__karma__.loaded = function () {
};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  //console.log('isSpecFile' + path);
  return path.slice(-8) == '.spec.js';
}

function isBuiltFile(path) {
  var builtPath = '/base/src/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

System.config({
  baseURL: '/base'
});

System.config(
{
  map: {
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular',
    'app': 'src/app'
  },
  packages: {
    'app': {
      main: 'main.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    // '@angular/router-deprecated': {
    //   main: 'index.js',
    //   defaultExtension: 'js'
    // },
    // '@angular/router': {
    //   main: 'index.js',
    //   defaultExtension: 'js'
    // },
    'rxjs': {
      defaultExtension: 'js'
    }
  }
});

Promise.all([
      System.import('@angular/core/testing'),
      System.import('@angular/platform-browser-dynamic/testing')
    ])
  .then((providers) => {
    var coreTesting = providers[0];
    var browserTesting = providers[1];
    coreTesting.TestBed.initTestEnvironment(
            browserTesting.BrowserDynamicTestingModule,
            browserTesting.platformBrowserDynamicTesting());

  })
  .then(function() {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);