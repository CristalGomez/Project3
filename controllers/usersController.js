

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
    },
    create: function(req, res){
        db.Users.create(req.body)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        db.Users.findOneAndUpdate({id: req.params.id}, req.body)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res){
        db.Users.findById(req.params.id)
        .then(dbUsers => dbUsers.remove())
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err))
    }
}