var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var csso = require('gulp-csso');
var ejs = require("gulp-ejs");
var del = require('del');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var gutil = require("gulp-util");
var postcss = require('gulp-postcss');

gulp.task('clean', function () {
    return del(['dist/*']);
});

gulp.task('js', function () {
    return gulp.src('./js/*')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('img', function () {
    return gulp.src('./img/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('./dist/img/'));
});

gulp.task('less', function () {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(postcss([require('autoprefixer')]))
        .pipe(csso())
        .on('error', function (e) {
            console.log(e)
        })
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('ejs', function () {
    gulp.src("./ejs/*.ejs")
        .pipe(ejs({
            msg: "Hello Gulp!"
        }, {
            ext: ".html"
        }))
        .pipe(gulp.dest("./dist/html/"));
});

gulp.task("webpack", function (callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack(
        // configuration
        myConfig
        , function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        });
});

gulp.task('default', ['clean', 'webpack']);
