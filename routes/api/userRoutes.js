let express = require('express');
let UserController = require('../../controllers/userController');

let router = express.Router();

router.get('/getAllUsers', UserController.getAllUsers);
router.post('/signUp', UserController.newUser);

module.exports = router;