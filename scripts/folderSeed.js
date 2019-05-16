const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/iimageDb"
);
db.User.find({})
    .then((data) => {
        console.log(data[0]._id);
        const folderSeed = [
            {
                name: "Wedding",
                //skylar
                userId: "",
                images: ""
            },
            {
                name: "Summer 2019",
                //tyler
                userId: "",
                images: ""
            },
            {
                name: "College Graduation",
                //cristal
                userId: "",
                images: ""
            },
            {
                name: "Colorado 2019",
                //cristal
                userId: "",
                images: ""
            }
        ]

        db.Folder
            .remove({})
            .then(() => db.Folder.collection.insertMany(folderSeed))
            .then(data => {
                console.log(data.result.n + " folders inserted!");
            })
            .catch(err => {
                console.log(err)
            })
    });