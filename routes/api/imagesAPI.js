/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/************************************|
|*  SETS UP API ROUTES FOR IMAGES *|
|************************************/
// Imports in controller for images
const imagesController = require('../../controllers/imagesController.js');

// Matches with '/api/images' this is defined in '../index.js'
router.route('/')
	.get(imagesController.findSomeRegexPop)
	.post(imagesController.create);

// Matches with '/api/images/:id' this is defined in '../index.js'
// router.route('/:id')
// .get(imagesController.findById)
// .put(imagesController.update)
// .delete(imagesController.remove);

router.route('/idtwo/:id')
	.get(imagesController.findByIdTwoPop)
	.put(imagesController.updateByIdTwo);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;