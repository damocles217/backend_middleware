const bcrypt = require('bcrypt');
const RequestError = require('../../config/Error');

const userService = require('../services/findUser');
const { makeToken } = require('../utils/makeToken');
async function loginUser(req, res) {
  try {
    const body = req.body;

    const userResponse = await userService.findUser(body.email);

    if (!bcrypt.compareSync(body.password, userResponse.password)) {
      throw new RequestError('Invalid credentials', 'BA002');
    }

    const { id, name, email } = userResponse;

    const jwt = makeToken({ id, name, email });

    res.status(200).send({ user: { id, name, email }, accessToken: jwt });
  } catch (e) {
    console.error(e);
    res.status(400).send({
      error: {
        message: e.message,
        code: e.code,
      },
    });
  }
}

module.exports = { loginUser };
