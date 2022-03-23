function compileJs() {
    const gulp = require('gulp');
    const sourcemaps = require('gulp-sourcemaps');
    const concat = require('gulp-concat');
    const uglify = require('gulp-uglify');

    return gulp.src("src/EventBut.js")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
}


function defaultTask() {
    return compileJs();
}

exports.default = defaultTask
