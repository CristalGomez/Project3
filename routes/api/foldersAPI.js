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
const foldersController = require('../../controllers/foldersController.js');

// Matches with '/api/folders' this is defined in '../index.js'
router.route('/')
	.get(foldersController.findSomeRegexPop)
	.post(foldersController.create);

// Matches with '/api/folders/:id' this is defined in '../index.js'
// router.route('/:id')
// .get(foldersController.findById)
// .put(foldersController.update)
// .delete(foldersController.remove);

router.route('/idtwo/:id')
	.get(foldersController.findByIdTwoPop)
	.put(foldersController.updateByIdTwo);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;