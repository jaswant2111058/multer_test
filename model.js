const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
      img : {
          data: Buffer,
          contentType: String
      }
  });
  
  // create a model
  module.exports =  mongoose.model("Image", imageSchema); 