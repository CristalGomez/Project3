//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const Image = new Schema({
    Image: [
        {
            title: {type: String},
            link: {type: String},
            folderId: {type: Schema.Types.ObjectId, ref: 'Folders'}
        }
    ]
});


module.exports = mongoose.model("Image", Image);


