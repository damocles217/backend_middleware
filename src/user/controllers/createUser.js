const { makeToken } = require('../utils/makeToken');

const userService = require('../services/createUser');

async function createUser(req, res) {
  try {
    const body = req.body;

    const user = await userService.createUser(body);
    const { id, name, email } = user;
    const jwt = makeToken({ id, name, email });

    res.json({
      user,
      accessToken: jwt,
    });
  } catch (e) {
    res.status(400).send({
      error: {
        message: e.message,
        code: e.code,
      },
    });
  }
}

module.exports = { createUser };
