/*****************|
|*  DEPENDECIES  *|
|*****************/
//  MongoDB object modeling tool
const mongoose = require("mongoose");

/******************|
|* INITIALIZATION *| 
|******************/
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

/**********|
|* SCHEMA *| 
|**********/
// Create Schema for collectionNameSchema
const ourUser = new Schema({
  name: {},
  profileImg: {},
  email: {},
  //the unique id created by Firebase
  fbID: {},
  password: {},
  //creator or client
  status: {},
  //the images on their profile
  images: {},
});

/***********|
|* EXPORTS *| 
|***********/
module.exports = mongoose.model("CollectionName", ourUser);