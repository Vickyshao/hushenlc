'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpCopy = require('gulp-copy');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const htmlminify = require('gulp-html-minify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const compass = require('gulp-compass');
var compassOptions = {
    // project: path.join(__dirname, 'static'),
    sass: 'scss'
        // css: 'css',
        // image: 'img'
};

// sass编译
gulp.task('compass', function() {
    gulp.src('scss/**/*.scss').pipe(compass(compassOptions)).on('error', console.error).pipe(gulp.dest('mimosapc/share/css'));
    gulp.src('scss/**/*.scss').pipe(compass(compassOptions)).on('error', console.error).pipe(gulp.dest('mimosah5/share/css'));
});
gulp.task('live', function() { gulp.watch('scss/**/*.scss', ['compass']); });
// 压缩js
gulp.task('js', function() {
    gulp.src('mimosapc/share/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/mimosapc/share/js'));
    gulp.src('mimosah5/share/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/mimosah5/share/js'));
});
// gulp.task('all-js',function () {
//     gulp.src('js/*.js').pipe(concat('all.js')).pipe(gulp.dest('./dist'));
// });

// 自动为css添加前缀
gulp.task('add-pro', function() {
    gulp.src('mimosapc/share/css/*.css').pipe(autoprefixer()).pipe(gulp.dest('./dist/mimosah5/share/css/'));
    gulp.src('mimosah5/share/css/*.css').pipe(autoprefixer()).pipe(gulp.dest('./dist/mimosapc/share/css/'));
});
// 压缩css
gulp.task('css', function() {
    gulp.src('mimosapc/share/css/*.css').pipe(csso()).pipe(gulp.dest('./dist/mimosapc/share/css/'));
    gulp.src('mimosah5/share/css/*.css').pipe(csso()).pipe(gulp.dest('./dist/mimosah5/share/css/'));
});
// 压缩html
gulp.task('html', function() {
    gulp.src(['*.html']).pipe(htmlminify()).pipe(gulp.dest('./dist'));
    gulp.src(['mimosapc/share/*.html']).pipe(htmlminify()).pipe(gulp.dest('./dist/mimosapc/share/'));
    gulp.src(['mimosah5/share/*.html']).pipe(htmlminify()).pipe(gulp.dest('./dist/mimosah5/share/'));
});
// 压缩图片
gulp.task('img', function() {
    gulp.src('mimosapc/share/img/*.{jpg,png,gif,ico}').pipe(imagemin()).pipe(gulp.dest('./dist/mimosapc/share/img/'));
    gulp.src('mimosah5/share/img/*.{jpg,png,gif,ico}').pipe(imagemin()).pipe(gulp.dest('./dist/mimosah5/share/img/'));
});
gulp.task('copy', function() {
    gulp.src('fonts/**/*').pipe(gulp.dest('./dist/mimosapc/share/fonts'));
    gulp.src('fonts/**/*').pipe(gulp.dest('./dist/mimosah5/share/fonts'));
    gulp.src('fonts/**/*').pipe(gulp.dest('mimosapc/share/fonts'));
    gulp.src('fonts/**/*').pipe(gulp.dest('mimosah5/share/fonts'));
});

gulp.task('default', ['live', 'add-pro', 'copy', 'img', 'css', 'html', 'js']);