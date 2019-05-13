/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/**********************************|
|*  SET UP INDIVIDUAL API ROUTES  *|
|**********************************/
// Import in individual routes
const collectionNameRoutes = require("./collectionName");
const foldersRoutes = require('./foldersAPI.js');
const usersRoutes = require('./usersAPI.js');
const imagesRoutes = require('./imagesAPI.js');

// Sets path to use individual routes
// EXAMPLE:
//   router.use("/collectionName", collectionNameRoutes);
//   // www.url.com/api/collectionName will use routes from collectionNameRoutes
router.use("/collectionName", collectionNameRoutes);
router.use('/folders', foldersRoutes);
router.use('/users', usersRoutes);
router.use('/images', imagesRoutes);


/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API routes
module.exports = router;