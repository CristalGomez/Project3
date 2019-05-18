//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const SignUp = new Schema({
    SignUp: [
        {
            email: {type: String},
            name: {type: String},
            password: {type: String},
            //firebase ID
            fbId: {type: String},
        }
    ]
});


module.exports = mongoose.model("SignUp", SignUp);


