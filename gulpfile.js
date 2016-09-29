const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack/webpack-base.config');
const webpackConfigDev = require('./webpack/webpack-dev.config');
const path = require('path');
const del = require('del');
const fs = require('fs');

const webpackStatsDev = {
  hash: true,
  version: true,
  timings: true,
  assets: true,
  chunks: false,
  chunkModules: false,
  modules: false,
  cached: false,
  reasons: true,
  source: true,
  errorDetails: true,
  chunkOrigins: false,
  colors: true,
};

function deployToPath(destinationPath) {
  gulp.src('./dist/**')
    .pipe(gulp.dest(destinationPath));
}

gulp.task('clean', () => del(['./dist/**']));

gulp.task('dev', ['clean', 'webpack-dev']);

gulp.task('webpack-dev', (callback) => {
  webpack(webpackConfigDev(webpackConfigBase), (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    fs.writeFileSync(
      path.join(__dirname, 'stats.json'),
      JSON.stringify(stats.toJson('verbose')));

    let deployPath;
    process.argv.forEach((value, index, map) => {
      if (value === '-path') {
        deployPath = map[index + 1];
      }
    });
    if (deployPath) {
      deployToPath(deployPath);
    }

    gutil.log('[webpack]', stats.toString(webpackStatsDev));
  });
});
