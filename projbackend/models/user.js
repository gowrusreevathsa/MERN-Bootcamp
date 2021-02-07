var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    maxLength: 32,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  //TODO
  password: {
    type: String,
    trim: true,
  },
});
