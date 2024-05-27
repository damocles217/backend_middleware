const { authenticateUser } = require('./middlewares/authentication');
const { getUser } = require('./controllers/getUser');
const { loginUser } = require('./controllers/loginUser');
const { createUser } = require('./controllers/createUser');

const router = require('express').Router();

router.post('/', createUser);
router.post('/login', loginUser);

router.use(authenticateUser);
router.get('/me', getUser);

module.exports = router;
