import gulp from 'gulp';
import babel from 'gulp-babel';
import {
  resolve
} from 'path';
import config from '../config';

const paths = {
  scripts: [
    resolve(config.BASE_PATH, "src", "*.js"),
    resolve(config.BASE_PATH, "src", "*", "*.js"),
    resolve(config.BASE_PATH, "src", "*", "*", "*.js"),
    resolve(config.BASE_PATH, "src", "*", "*", "*", "*.js"),
  ]
}

function scripts() {
  return gulp.src(paths.scripts, {
      sourcemaps: true
    })
    .pipe(babel())
    .pipe(gulp.dest(`${config.BASE_PATH}/build`));
}

function watch() {
  gulp.watch(paths.scripts, scripts)
}

gulp.task('build', scripts);
gulp.task('watch', watch);

gulp.parallel('build', 'watch')()
