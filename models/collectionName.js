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
  //conversations is where our data is duplicated
  conversations: [
    {
      message: {},
      timestamp: {},
      //this is a 2 way conversation so it needs to match to the specific user
      userID: {}
    }
  ],

  images: { type: String, required: true },
  folder: { type: String, required: true},


});

/***********|
|* EXPORTS *| 
|***********/
module.exports = mongoose.model("CollectionName", ourUser);
