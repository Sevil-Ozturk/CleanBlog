const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MongoDB'ye bağlan
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Şema ve model tanımlaması
const PhotoSchema = new Schema({
    title: String,
    description: String,
    Image:String,
    dateCreated:{
      type:Date,
      default:Date.now,
    }
  });

  const Photo = mongoose.model('Photo', PhotoSchema);

  module.exports= Photo;