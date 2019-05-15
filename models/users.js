//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const User = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    bio: { type: String },
    skill: { type: String, default: false, required: true },

    // images: [{ type: Schema.Types.UserId, ref: "images" }],
    folders: [{
        type: Schema.Types.ObjectId, ref: 'Folder'
    }]

});


module.exports = mongoose.model("User", User);




// users [
//   {
//       id: 'user1',
//       name: 'k',
//       email: 'k',
//       images: [
//       'img1',
//       '565656767567',
//       'tfftfyttyfft'
//       ]
//   }

// ]

// images [
//   {
//       id: 'img1',
//       title: "title",
//       link: " www.www.",
//       userID: "user1"
//   },
//   {
//       id: '3434545354354',
//       title: "title",
//       link: " www.www.",
//       userID: "12321332121"
//   },
//   {
//       id: '3434545354354',
//       title: "title",
//       link: " www.www.",
//       userID: "12321332121"
//   },
//   {
//       id: '3434545354354',
//       title: "title",
//       link: " www.www.",
//       userID: "12321332121"
//   },
//   {
//       id: '3434545354354',
//       title: "title",
//       link: " www.www.",
//       userID: "12321332121"
//   },
//   {
//       id: '3434545354354',
//       title: "title",
//       link: " www.www.",
//       userID: "12321332121"
//   },
//   {
//       id: '3434545354354',
//       title: "title",
//       link: " www.www.",
//       userID: "12321332121"
//   },
// ]