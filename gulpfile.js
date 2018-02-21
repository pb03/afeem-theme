var gulp = require('gulp'),

  // Load gulp plugins
  autoprefixer = require('gulp-autoprefixer'),
  concat       = require('gulp-concat'),
  sass         = require('gulp-sass'),
  cleanCSS     = require('gulp-clean-css'),
  uglify       = require('gulp-uglify-es').default;
  browserSync  = require('browser-sync').create();

/**
 * Concatinate and compress SCSS
 */
gulp.task('sass', function() {
  return gulp.src('assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

/**
 * Concatinate and uglify JS
 */
gulp.task('js', function() {
  return gulp.src('assets/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

/**
 * Auto-reload browser
 */
gulp.task('serve', function() {
    // Server path
    browserSync.init({ server: "./" });
    // Reload browser when a dist file is updated
    gulp.watch(['index.html', 'assets/scss/main.scss', 'assets/js/main.js']).on('change', browserSync.reload);
});

/**
 * Default task, watch changes
 */
gulp.task('default', ['sass', 'js', 'serve'], function() {
  gulp.watch('assets/scss/main.scss', ['sass']);
  gulp.watch('assets/js/main.js', ['js']);
});