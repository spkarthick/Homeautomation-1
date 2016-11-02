var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var removeCode = require('gulp-remove-code');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var argv = require('yargs').argv;
var openUrl = require('open');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

// define tasks here
gulp.task('component', function() {
    gulp.src(["./generator/name/name.js","./generator/name/name.css","./generator/name/name.component.js","./generator/name/name.controller.js","./generator/name/name.service.js","./generator/name/name.html"])
		.pipe(replace(/{{name}}/g, argv.name))
		.pipe(rename(function(path) {
			path.basename = path.basename.replace(/name/g, argv.name);
		}))
        .pipe(gulp.dest('./components/' + argv.name));
});

gulp.task('serve', function() { 
	connect.server({
		root: ["."],
		livereload: true,
		// Change this to '0.0.0.0' to access the server from outside.
		port: 9000
	});
	watch(['./components/**/*', './common/**/*']).pipe(connect.reload());
	openUrl("http://localhost:9000");
});