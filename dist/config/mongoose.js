'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// connect to mongoose!


//CHANGE THE LINE BELOW

// require the fs module for loading model files
_mongoose2.default.connect('mongodb://localhost/coelab');
// create a variable that points to the path where all of the models live

// require path for getting the models path
// require mongoose
var models_path = _path2.default.join(__dirname, './../models');
// console.log(models_path);
// read all of the files in the models_path and require (run) each of the javascript files
_fs2.default.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
//# sourceMappingURL=mongoose.js.map