"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');
var replace = require('gulp-replace');
 
/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server"], function () {
    return gulp.src(["src/**/*", "!src/**/*.ts", "!src/systemjs.config.js", "!src/server", "!src/server/**"])
        .pipe(gulp.dest("build"));
});
gulp.task("server", function () {
    return gulp.src(["system.js", "package.json"], { cwd: "src/server/**" })
        .pipe(gulp.dest("build"));
});
/**
 * Copy all required js libraries into build directory.
 */
gulp.task("jsToLibs", function () {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'systemjs/dist/system.src.js',
        'core-js/client/shim.min.js',
        'reflect-metadata/Reflect.js',
        'bootstrap/dist/js/bootstrap.*js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});
/**
 * Copy css into build directory.
 */
gulp.task("cssToLibs", function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap.css.map'
    ]).pipe(gulp.dest('build/css'));
});
/**
 * Modify and copy systemjs.config.js, index.html
 */
gulp.task('systemjs', ['resources'], function(){
  gulp.src(['src/systemjs.config.js', 'src/index.html'])
    .pipe(replace('node_modules', 'lib'))
    .pipe(gulp.dest('build'));
});
/**
 * Build the project.
 */
gulp.task("default", ['resources', 'jsToLibs', 'cssToLibs', 'systemjs'], function () {
    console.log("Building the project ...");
});
