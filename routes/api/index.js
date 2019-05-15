
const path = require('path');
const router = require('express').Router();
const usersRoutes = require('./usersAPI');
const foldersRoutes = require('./foldersAPI');
const imagesRoutes = require('./imagesAPI');
// const signUpRoutes = require('./signUpAPI')

router.use('/users', usersRoutes);
router.use('/folders', foldersRoutes);
router.use('/images', imagesRoutes);

router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;