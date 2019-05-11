//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const folders = new Schema({
    folders: {
        name: {
            type: String
        },
        userID: '',
        imageID: [
            {

            }
        ]
    }

});


module.exports = mongoose.model("folders", folders);