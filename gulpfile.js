const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');

function scss() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
}

function js() {
    return gulp.src('src/js/main.js', { read: false })
        .pipe(tap((file) => {
            file.contents = browserify(file.path, { debug: true }).bundle();
        }))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
}

exports.dev = () => {
    gulp.watch('src/scss/*.scss', scss);
    gulp.watch('src/js/*.js', js);
};