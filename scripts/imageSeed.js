const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/iimageDb"
);

const imageSeed = [
   {
       title: "",
       link: "",
   },
   {
       title: "",
       link: ""
   },
   {
       title: "",
       link: ""
   }
]

db.Image
.remove({})
.then(() => db.Image.collection.insertMany(imageSeed))
.then(data => {
    console.log(data.result.n + " images inserted!");
})
.catch(err => {
    console.log(err)
})