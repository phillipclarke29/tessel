var gulp = require('gulp');
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function (task){
 require('./gulp/' + task)
})
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
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
  .pipe(gulp.dest('./assets/'))
  .pipe(livereload());
});

gulp.task('dev', ['watch:scripts', 'watch:sass', 'dev:server']);

gulp.task('watch:scripts', ['scripts'], function() {
  livereload.listen();
  gulp.watch('./ng/*.js', ['scripts']);
});

gulp.task('watch:sass', ['sass'], function() {
  livereload.listen();
  gulp.watch('./sass/*.scss', ['sass']);
});
