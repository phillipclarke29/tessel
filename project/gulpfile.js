var gulp = require('gulp');
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function (task){
 require('./gulp/' + task)
})
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

gulp.task('dev', ['watch:scripts', 'watch:sass']);

gulp.task('watch:scripts', ['scripts'], function() {
  gulp.watch('./ng/*.js', ['scripts']);
});

gulp.task('watch:sass', ['sass'], function() {
  gulp.watch('./sass/*.scss', ['scripts']);
});
