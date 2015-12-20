var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('scripts', function() {
  return gulp.src(['./ng/module.js','./ng/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./assets/'));
});


gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/stylesheets/'));
});

gulp.task('watch', function() {
  gulp.watch('./ng/*.js', ['scripts']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});
