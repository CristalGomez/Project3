/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/************************************|
|*  SETS UP API ROUTES FOR FOLDERS *|
|************************************/
// Imports in controller for folders
const foldersController = require('../../controllers/foldersController');

// Matches with '/api/folders' this is defined in '../index.js'
router.route('/')
	.get(foldersController.findAll)
	.post(foldersController.create); 

router.route('/:id')
.get(foldersController.findById)
.put(foldersController.update)
.delete(foldersController.remove)


/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;