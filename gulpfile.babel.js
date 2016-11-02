/* eslint-env node */

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import rimraf from 'rimraf';
import runSequence from 'run-sequence';

const $ = loadPlugins();

gulp.task('clean', callback => {
  rimraf('./app/dist', callback);
});

gulp.task('cleanPackageDist', callback => {
  rimraf('./dist', callback);
});

gulp.task('mainJS', () => {
  return gulp.src('./src/main.js')
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: [
        ['env', { targets: { node: 6.5 } }]
      ]
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('html', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('renderJSX', () => {
  return gulp.src('./src/jsx/**/*.jsx', { base: './src/jsx' })
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: [
        'react',
        ['env', { targets: { node: 6.5 } }]
      ]
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('sass', () => {
  return gulp.src('./src/sass/index.scss')
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({ outputStyle: 'compressed' }))
    .pipe($.autoprefixer('Chrome 53')) // Electronのバージョンアップ時にprocess.versions.chromeで確認する
    .pipe($.rename('bundle.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('watch', () => {
  gulp.watch('./src/main.js', ['mainJS']);
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/jsx/**/*.{js,jsx}', ['renderJSX']);
  gulp.watch('./src/sass/**/*.{scss,sass}', ['sass']);
});

gulp.task('build', callback => {
  return runSequence(
    'clean',
    ['mainJS', 'html', 'renderJSX', 'sass'],
    callback
  );
});
