//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const images = new Schema({
    images: [
        {
            id: '',
            title: '',
            link: '',
            userId: '',
        }
    ]
});


module.exports = mongoose.model("images", images);


