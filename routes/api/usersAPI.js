/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/************************************|
|*  SETS UP API ROUTES FOR USERS *|
|************************************/
// Imports in controller for users
const usersController = require('../../controllers/usersController.js');

// Matches with '/api/users' this is defined in '../index.js'
router.route('/')
	.get(usersController.findSomeRegexPop)
	.post(usersController.create);

// Matches with '/api/users/:id' this is defined in '../index.js'
// router.route('/:id')
// .get(usersController.findById)
// .put(usersController.update)
// .delete(usersController.remove);

router.route('/idtwo/:id')
	.get(usersController.findByIdTwoPop)
	.put(usersController.updateByIdTwo);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;