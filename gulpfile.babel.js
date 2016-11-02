/* eslint-env node */

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import uglifySaveLicense from 'uglify-save-license';
import minimist from 'minimist';
import rimraf from 'rimraf';
import runSequence from 'run-sequence';

const $ = loadPlugins();
$.webpack = require('webpack-stream');

const options = minimist(process.argv.slice(2), {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
});

gulp.task('clean', callback => {
  rimraf('./app/dist', callback);
});

gulp.task('mainJS', () => {
  return gulp.src('./main.js')
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe((options.env === 'development') ? $.sourcemaps.init() : $.empty())
    .pipe($.babel())
    .pipe((options.env === 'development') ? $.sourcemaps.write('.') : $.empty())
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('html', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('renderJSX', () => {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(options.env)
    })
  ];
  if(options.env === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ output: { comments: uglifySaveLicense } }));
  }

  return gulp.src('./src/jsx/index.jsx')
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.webpack({
      output: { filename: 'bundle.js' },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      devtool: (options.env === 'development') ? 'source-map' : undefined,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['latest']
            }
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'latest']
            }
          }
        ]
      },
      plugins
    }))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/index.scss')
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe((options.env === 'development') ? $.sourcemaps.init() : $.empty())
    .pipe($.sass.sync())
    .pipe($.autoprefixer('Chrome 53')) // Electronのバージョンアップ時にprocess.versions.chromeで確認する
    .pipe((options.env === 'production') ? $.cleanCss() : $.empty())
    .pipe($.rename('bundle.css'))
    .pipe((options.env === 'development') ? $.sourcemaps.write('.') : $.empty())
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/jsx/**/*.{js,jsx}', ['jsx']);
  gulp.watch('./src/sass/**/*.{scss,sass}', ['sass']);
});

gulp.task('build', callback => {
  return runSequence(
    'clean',
    ['mainJS', 'html', 'renderJSX', 'sass'],
    callback
  );
});
