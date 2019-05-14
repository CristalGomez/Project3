//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const Folder = new Schema({
    Folder: {
        name: {
            type: String
        },
        userID: '',
        images: [{ type: Schema.Types.ObjectId, ref: "Images" }],
    }

});


module.exports = mongoose.model("Folder", Folder);