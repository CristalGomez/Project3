
// const ObjectId = require('mongoose').Types.ObjectId;

// importing in the model
// const Images = require('../models').Images;
// const Folders = require('../models').Folders;
// //grabbing users from signup schema
// const Users = require('../models').Users;


// //import in the controllers
// const imagesController = require('./imagesController');
// const foldersController = require('./foldersController');

// //methods for controller
// const usersController = {

//     findByID: function(req,res){
//         Users
//         .findById(req.params.id)
//         .then((usersModel) => res.json(usersModel))
//         .catch((error) => {console.log(error)})
//     }
// }

// // //exports
// // module.exports = usersController;


const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Users.find(req.query)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req,res){
        db.Users.findById(req.params.id)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err))
    }
}