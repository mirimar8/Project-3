const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const prettyError = require('gulp-prettyerror');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');



gulp.task("scripts", function () {
    return gulp
        .src("./js/*.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(terser())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(gulp.dest("./build/js"));
});


gulp.task('sass', function (done) {
    gulp
        .src('./sass/style.scss', { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(prettyError())
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions']
            })
        )
        .pipe(gulp.dest('./build/css'))
        .pipe(uglifycss())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/css'));

    done();
});

gulp.task('browser-sync', function (done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp
        .watch('build/css/*.css')
        .on('change', browserSync.reload);

    done();
});


gulp.task('reload', function () {
    browserSync.reload();
});



gulp.task('watch', function (done) {
    gulp.watch('sass/*.scss', gulp.series('sass'));
    gulp.watch("./js/*.js", gulp.series("scripts"));
    done();
});



gulp.task('default', gulp.parallel('watch', "browser-sync"));



