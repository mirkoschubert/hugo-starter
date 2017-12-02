var gulp          = require('gulp'),
    htmlmin       = require('gulp-htmlmin'),
    sass          = require('gulp-sass'),
    sassLint      = require('gulp-sass-lint'),
    autoprefixer  = require('gulp-autoprefixer'),
    cleancss      = require('gulp-clean-css'),
    concat        = require('gulp-concat'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify'),
    changed       = require('gulp-changed'),
    imagemin      = require('gulp-imagemin'),
    browserSync   = require('browser-sync'),
    watch         = require('gulp-watch');

// HTML
gulp.task('tools:htmlmin', function() {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeEmptyElements: true
    }))
    .pipe(gulp.dest('public/'));
});

// SASS & CSS
gulp.task('tools:css', function() {
  return gulp.src('static/assets/css/styles.sass')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sass({
      precision: 5
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cleancss({
      advanced: false
    }))
    //.pipe(concat('styles.css'))
    .pipe(gulp.dest('public/assets/css'));
});

// JavaScript
gulp.task('tools:js', function() {
  return gulp.src('static/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint().reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js'));
});

// Images
gulp.task('tools:img', function() {
  return gulp.src('static/assets/img/**/*')
    .pipe(changed('public/assets/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets/img'));
});

// Hugo
gulp.task('hugo', function() {

});

// Build
gulp.task('build:content', function() {

});

gulp.task('build:all', function() {

});

gulp.task('build:publish', function() {

});

// Serve
gulp.task('serve', function() {

});


// Default