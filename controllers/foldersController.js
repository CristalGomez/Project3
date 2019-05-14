// const ObjectId = require('mongoose').Types.ObjectId;

// //importing in the model
// const Users = require('../models').Users;
// const Images = require('../models').Images;
// const Folders = require('../models').Folders;

// //import in the controllers
// const foldersController = require('./foldersController');
// const usersController = require('./usersController');
// const imagesController = require('./imagesController');

// const foldersController = {
//     create: function(req,res){
//         console.log(req.body);

//         usersController
//         .
//     }
// }

const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Folder.find(req.query)
        .then(dbFolder => releaseEvents.json(dbFolder))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res){
        db.Folder.findById(req.params.id)
        .then(dbFolder => res.json(dbFolder))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res){
        console.log(req.body);

        db.Folder.create(req.body)
        .then(dbFolder => res.json(dbFolder))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res){
        db.Folder.findById(req.params.id)
        .then(dbFolder => dbFolder.remove())
        .then(dbFolder => res.json(dbFolder))
        .catch(err => res.status(422).json(err))
    }
}



// module.exports = foldersController;