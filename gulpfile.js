var gulp   = require('gulp'),
    $      = require('gulp-load-plugins')(),
    //noop=function() {},
    config = require('./config.json');

gulp.task('clean', function (cb) {
  var del = require('del');
  del([config.target], cb);
});

gulp.task('jscs', function() {
//  gulp.src(config.scripts.source)
//      .pipe($.jscs())
//      .on('error', noop);
});

gulp.task('jscs:fail', function() {
//  return gulp.src(config.scripts.source)
//      .pipe($.changed())
//      .pipe($.plumber())
//      .pipe($.jscs());
//      //.pipe($.jscsStylish());
});

gulp.task('build', ['clean'], function () {
  var template = gulp
          .src(config.templates.source)
          .pipe($.jade())
          .pipe($.minifyHtml({
            empty:  true,
            spare:  true,
            quotes: true
          }))
          .pipe($.angularTemplatecache({
            module: config.templates.templateCache.module,
            root:   config.templates.templateCache.basePath
          })),
      scripts  = gulp.src(config.scripts.source)
          .pipe($.ngAnnotate())
          .pipe($.stripComments());

  return $.merge(template, scripts)
      .pipe($.concat(config.targetBaseName + '.js'))
      .pipe(gulp.dest('./dist'))
      .pipe($.uglify())
      .pipe($.concat(config.targetBaseName + '.min.js'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['jscs:fail', 'build', ]);

gulp.task('watch', ['jscs'], function() {
  gulp.watch('./src/**/*', ['jscs']);
});