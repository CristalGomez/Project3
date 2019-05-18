const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/iimageDb"
);

db.User.find({}).then((data) => {
    console.log("data from userSeed, line 10", data)

const userSeed = [
    {
        firstName: "Cristal",
        lastName: "Gomez",
        bio: "Full-Stack Web Developer with an interest in photography. I love taking pictures with my Nikon D750!",
        skill: "Creator",
        pImage: "https://files.slack.com/files-tmb/TDV67LNC8-FJNDCCEHK-d46037f676/image_from_ios_720.jpg",
        folders: 
            data[0].folders
        
    },
    {
        firstName: "Skylar",
        lastName: "Piper",
        bio: "Full-Stack Web Developer. React.js Expert. I will style your website.",
        skill: "Creator",
        pImage: "https://files.slack.com/files-tmb/TDV67LNC8-FJQT0NA4V-c6e654a39f/sky_720.jpg",
        folders: data[1].folders
        
    },
    {
        firstName: "Tyler",
        lastName: "Leach",
        bio: "Full-Stack Web Developer. MySQL expert. Joining tables is easy.",
        skill: "Creator",
        pImage: "https://files.slack.com/files-tmb/TDV67LNC8-FJG47LP33-fb35582066/ty_720.jpg",
        folders: 
            data[2].folders
        
    }
]

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    console.log("user seed, line 49", data.result.n + " users inserted!");
    require('./folderSeed');
})
.catch(err => {
    console.log(err)
})
})
