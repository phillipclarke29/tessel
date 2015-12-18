var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
gulp.task('scripts', function() {
  return gulp.src(['./ng/module.js','./ng/*.js'])
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./assets/'));
});
gulp.task('watch:scripts',['scripts'],function(){
  gulp.watch('./ng/*.js',['scripts'])

})
