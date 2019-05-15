
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
    update: function(req, res){
        db.Folder.findOneAndUpdate({id: req.params.id}, req.body)
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