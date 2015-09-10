var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      //  We need to polyfill as PhantomJS doesn't support 'bind'.
      '../node_modules/babel-core/browser-polyfill.js',
      '../src/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '../src/**/*.spec.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    singleRun: true,
    webpack: {
      entry: {},
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            exclude: [
              /node_modules/,
              /\.spec\.js/
            ],
            loader: 'isparta-instrumenter-loader'
          },
        ],
        loaders: [
          {
            test: /\.jsx?$/,      
            loader: 'babel-loader',
            include: path.resolve(__dirname, '../src')
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true,
    },
    coverageReporter: {
      dir: '../build/coverage/',
      reporters: [
        { type: 'html', subdir: 'html' }, 
        { type: 'lcov', subdir: 'lcov' }
      ] 
    }
  });
};
