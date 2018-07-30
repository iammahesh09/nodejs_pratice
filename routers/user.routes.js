const exprees = require('express');

const router = exprees.Router();
var cors = require('cors')
const userCtrl = require('../controllers/user.ctrl');

router.post('/register', cors(), userCtrl.register)
router.post('/login', cors(), userCtrl.login)

module.exports = router;