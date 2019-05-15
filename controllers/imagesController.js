
const db = require('../models');

module.exports = {
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
    update: function(req, res){
        db.Images.findOneAndUpdate({id: req.params.id}, req.body)
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