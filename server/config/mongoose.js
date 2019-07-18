// require mongoose
import mongoose from 'mongoose';
// require the fs module for loading model files
import fs from 'fs';
// require path for getting the models path
import path from 'path';
// connect to mongoose!


//CHANGE THE LINE BELOW
mongoose.connect('mongodb://localhost/coelab');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// console.log(models_path);
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});