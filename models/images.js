//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const Images = new Schema({
    Images: [
        {
            title: {type: String},
            link: {type: String},
            
        }
    ]
});


module.exports = mongoose.model("Images", Images);


