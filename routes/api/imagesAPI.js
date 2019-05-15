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
const imagesController = require('../../controllers/imagesController');

// Matches with '/api/images' this is defined in '../index.js'
router.route('/')
	.get(imagesController.findAll)
	.post(imagesController.create); 

router.route('/:id')
.get(imagesController.findById)
.put(imagesController.update)
.delete(imagesController.remove)


/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;