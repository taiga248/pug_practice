const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

gulp.task("pug", () => {
  return gulp
    .src(["src/pug/**/*.pug", "!" + "src/pug/**/_*.pug"])
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("dist-css", () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", () => {
  gulp.watch("src/scss/**/*.scss", gulp.task("dist-css"));
  gulp.watch("src/pug/**/*.pug", gulp.task("pug"));
});
