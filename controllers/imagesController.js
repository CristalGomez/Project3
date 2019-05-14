// const userId = require('mongoose').Types.userId;

// //importing in the model
// const Users = require('../models').Users;
// const Folders = require('../models').Folders;


// //import in the controllers

// const ImagesController = {

// }


// module.exports = ImagesController;


const db = require('../models');

module.export = {
    findAll: function(req,res){
        db.Images.find(req,res)
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res){
        db.Images.findById(req.params.id)
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res){
        db.Images.create(req.body)
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res){
        db.Images.findById(req.params.id)
        .then(dbImages => dbImages.remove())
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err))
    }
}