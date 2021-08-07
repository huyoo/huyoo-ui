const {task, dest, src} = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');

task('less', function () {
  return src('components/*/*.less')
    .pipe(less())
    .pipe(concat('huyoo-ui.css'))
    .pipe(dest('./dist/'))
    .pipe(cssmin())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('./dist/'))
})
