/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require('express').Router();

/************************************|
|*  SETS UP API ROUTES FOR users *|
|************************************/
// Imports in controller for users
const usersController = require('../../controllers/usersController.js');

// Matches with '/api/users' this is defined in '../index.js'
router.route('/')
	.get(usersController.findAll)
	.post(usersController.create); 

router.route('/:id')
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove)


/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains parents routes
module.exports = router;