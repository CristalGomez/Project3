const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/iimageDb"
);
db.User.find({})
    .then((data) => {
        console.log("folder seed, line 10", data);
        console.log('line 11', data[0].folders)
        const folderSeed = [
            {
                name: "Wedding",
                //skylar
                userId: data[1]._id,
                images: [
                    data[1].folders
                ]
            },
            {
                name: "Summer 2019",
                //tyler
                userId: data[2]._id,
                images: ""
            },
            {
                name: "College Graduation",
                //cristal
                userId: data[0]._id,
                images: ""
            },
            {
                name: "Colorado 2019",
                //cristal
                userId: data[0]._id,
                images: ""
            }
        ]

        db.Folder
            .remove({})
            .then(() => db.Folder.collection.insertMany(folderSeed))
            .then(data => {
                console.log("folder seed, line 44", data.result.n + " folders inserted!");
            })
            .catch(err => {
                console.log(err)
            })
    });