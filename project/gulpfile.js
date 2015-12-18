var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./ng/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./assets/'));
});
