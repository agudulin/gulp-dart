# gulp-dart

> Compile Dart to JavaScript using [dart2js](https://www.dartlang.org/tools/dart2js/)


## Install

```sh
$ npm install --save gulp-dart
```


## Usage

```js
var gulp = require("gulp");
var dart = require("gulp-dart");

gulp.task("default", function() {
  return gulp
    .src('web/*.dart')
    .pipe(dart({ "minify": true }));
});
```

## License

MIT © [Alexander Gudulin](http://gudulin.com)
