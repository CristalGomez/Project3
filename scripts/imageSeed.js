const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/iimageDb"
);

db.Folder.find({}).then((data)=> {
    console.log('imageSeed line 10', data[0])
})

const imageSeed = [
   {
       title: image1,
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
    console.log("image seed, line 32", data.result.n + " images inserted!");
})
.catch(err => {
    console.log(err)
})