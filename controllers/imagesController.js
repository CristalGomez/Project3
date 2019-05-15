
const db = require('../models');

module.exports = {
    findAll: function(req,res){
        db.Image.find(req,res)
        .then(dbImage => res.json(dbImage))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res){
        db.Image.findById(req.params.id)
        .then(dbImage => res.json(dbImage))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res){
        db.Image.create(req.body)
        .then(dbImage => res.json(dbImage))
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        db.Image.findOneAndUpdate({id: req.params.id}, req.body)
        .then(dbImage => res.json(dbImage))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res){
        db.Image.findById(req.params.id)
        .then(dbImage => dbImage.remove())
        .then(dbImage => res.json(dbImage))
        .catch(err => res.status(422).json(err))
    }
}