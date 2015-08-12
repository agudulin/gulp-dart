var gutil = require("gulp-util");
var objectAssign = require("object-assign");
var spawn = require("child_process").spawn;
var through = require("through2");

var plugin = function(options) {
  options = objectAssign({
    "checked": false,
    "minify": false,
    "verbose": false,
    "analyze-all": false,
    "analyze-only": false,
    "analyze-signatures-only": false,
    "supress-warning": false,
    "fatal-warning": false,
    "supress-hints": false,
    "no-source-maps": false,
    "terse": false,
    "csp": false,
    "preserve-uris": false,
    "show-package-warnings": false
  }, options);

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (file.isStream()) {
      return cb(new gutil.PluginError("gulp-dart", "Streaming not supported"));
    }

    var args = Object.keys(options).filter(function(key) {
      return options[key];
    }).map(function(key) {
      return "--" + key;
    });

    args.unshift(file.path);
    args.push("-o", file.path + ".js");

    var child = spawn("dart2js", args);

    child.stdout.on("data", function(data) {
      gutil.log("gulp-dart:", data.toString("utf-8"));
    });
    child.stderr.on("data", function(data) {
      gutil.log("gulp-dart:", data.toString("utf-8"));
    });
    child.on("exit", function(code) {
      gutil.log("gulp-dart:", code);
      cb(null, file);
    });

  });
};

module.exports = plugin;
