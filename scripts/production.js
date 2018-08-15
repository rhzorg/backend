import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import {
  resolve
} from 'path';
import config from '../config';
import header from 'gulp-header';

const __config = JSON.stringify({
  APP_ID: config.appId,
  APP_PORT: config.appPort,
});

gulp.task('build', () => {
  const src = [
    resolve(config.BASE_PATH, "src", "*.js"),
    resolve(config.BASE_PATH, "src", "*", "*.js"),
    resolve(config.BASE_PATH, "src", "*", "*", "*.js"),
    resolve(config.BASE_PATH, "src", "*", "*", "*", "*.js"),
  ];
  return gulp.src(src, {
      sourcemaps: true
    })
    .pipe(header(`const __config = ${__config};`))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`${config.BASE_PATH}/dist`));
});

gulp.parallel('build')()
