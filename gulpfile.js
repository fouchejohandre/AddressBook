var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var modulesTMP = [
    'tmp/lib/jquery/dist/jquery.js',
    'tmp/lib/angular/angular.js',
	'tmp/lib/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    'tmp/lib/angular-animate/angular-animate.js',
    'tmp/lib/angular-resource/angular-resource.js',
    'tmp/lib/angular-ui-router/release/angular-ui-router.js',
    'tmp/lib/angular-sanitize/angular-sanitize.js',
    
    'tmp/app.module.js',
    'tmp/app.config.js',

    'tmp/Components/**/*',
    'tmp/Core/**/*'
];

var cssOrderTMP = [
    'tmp/lib/bootstrap/dist/css/bootstrap.css',
    'tmp/app.css',
    'tmp/app.animations.css',
    'tmp/Images/phone-book.png'
];
var modulesDIST = [
    'dist/lib/jquery/dist/jquery.js',
    'dist/lib/angular/angular.js',
	'dist/lib/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    'dist/lib/angular-animate/angular-animate.js',
    'dist/lib/angular-resource/angular-resource.js',
    'dist/lib/angular-ui-router/release/angular-ui-router.js',
    'dist/lib/angular-sanitize/angular-sanitize.js',
    
    'dist/app.module.js',
    'dist/app.config.js',

    'dist/Components/**/*',
    'dist/Core/**/*'
];

var cssOrderDIST = [
    'dist/lib/bootstrap/dist/css/bootstrap.css',
    'dist/app.css',
    'dist/app.animations.css',
    'dist/Images/phone-book.png'
];

var paths = {
	src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcCSS: 'src/**/*.css',
  srcJS: 'src/**/*.js',
  srcJPG: 'src/**/*.jpg',
  srcPNG: 'src/**/*.png',

    tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  tmpJPG: 'tmp/**/*.jpg',
  tmpPNG: 'tmp/**/*.png',

  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js',
  distJPG: 'dist/**/*.jpg',
  distPNG: 'dist/**/*.png'
};



/**
 * DEVELOPMENT
 */
gulp.task('html', function () 
{
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function () 
{
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function () 
{
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('jpg', function () 
{
    return gulp.src(paths.srcJPG).pipe(gulp.dest(paths.tmp));
});

gulp.task('png', function () 
{
    return gulp.src(paths.srcPNG).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', gulp.series('html', 'css', 'js', 'jpg', 'png'));

gulp.task('inject', gulp.series('copy', function () {
    var css = gulp.src(cssOrderTMP);
    var js = gulp.src(modulesTMP);
    return gulp.src(paths.tmpIndex)
      .pipe(inject( css, { relative:true } ))
      .pipe(inject( js, { relative:true } ))
      .pipe(gulp.dest(paths.tmp));
  }));
  
  gulp.task('serve', gulp.series('inject', function () {
    return gulp.src(paths.tmp)
      .pipe(webserver({
        port: 3000,
              livereload: true
      }));
  }));
  
  gulp.task('watch', gulp.series('serve', function () {
      gulp.watch(paths.src, gulp.series('inject'));
  }));

  gulp.task('default', gulp.series('watch'));

  gulp.task('clean', function () {
    del([paths.tmp, paths.dist]);
  });

  /**
 * PRODUCTION
 */
gulp.task('html:dist', function () {
    return gulp.src(paths.srcHTML)
      .pipe(htmlclean())
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('css:dist', function () {
    return gulp.src(paths.srcCSS)
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('js:dist', function () {
    return gulp.src(paths.srcJS)
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('jpg:dist', function () {
    return gulp.src(paths.srcJPG)
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('png:dist', function () {
    return gulp.src(paths.srcPNG)
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('copy:dist', gulp.series('html:dist', 'css:dist', 'js:dist', 'jpg:dist', 'png:dist'));

  gulp.task('inject:dist', gulp.series('copy:dist', function () {
    var css = gulp.src(cssOrderDIST);
    var js = gulp.src(modulesDIST);
    return gulp.src(paths.distIndex)
      .pipe(inject( css, { relative:true } ))
      .pipe(inject( js, { relative:true } ))
      .pipe(gulp.dest(paths.dist));
  }));
  gulp.task('build', gulp.series('inject:dist'));
  /**
   * PRODUCTION END
   */
  