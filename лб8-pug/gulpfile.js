const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const webserver = require('gulp-webserver');

gulp.task('html', () => {
    return gulp.src('./index.pug')
        .pipe(pug())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('webserver', () => {
    return gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('watch', () => {
    gulp.watch('./*.pug', gulp.series('html'));
});

gulp.task('default', gulp.parallel('watch', 'webserver'));