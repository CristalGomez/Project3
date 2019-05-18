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
       title: 'image1',
       link: "https://avatars2.githubusercontent.com/u/43790938?s=460&v=4",
       folderId: '5ce0301b878dd55fa8de4076'
   }
//    {
//        title: "",
//        link: ""
//    },
//    {
//        title: "",
//        link: ""
//    }
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