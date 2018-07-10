const exprees = require('express');

const router = exprees.Router();

const userCtrl = require('../controllers/user.ctrl');

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)

module.exports = router;