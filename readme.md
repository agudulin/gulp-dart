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
    .pipe(dart({
      "dest": "./dist"
      "minify": true
    }));
});
```

## Supported dart2js options
```js
checked                  // Insert runtime type checks and enable assertions (checked mode)
minify                   // Generate minified output
verbose                  // Display verbose information
analyze-all              // Analyze all code
analyze-only             // Analyze but do not generate code
analyze-signatures-only  // Skip analysis of method bodies and field initializers
suppress-warnings        // Do not display any warnings
fatal-warnings           // Treat warnings as compilation errors
suppress-hints           // Do not display any hints
enable-diagnostic-colors // Add colors to diagnostic messages
no-source-maps           // Do not generate a source map file
terse                    // Emit diagnostics without suggestions for how to get rid of the diagnosed problems
csp                      // Disables dynamic generation of code in the generated output
preserve-uris            // Preserve the source URIs in the reflection data
show-package-warnings    // Show warnings and hints generated from packages
```

## License

MIT © [Alexander Gudulin](http://gudulin.com)
