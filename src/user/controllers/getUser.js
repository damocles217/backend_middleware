const userService = require('../services/findUser');

async function getUser(req, res) {
  try {
    const user = req.user;
    const { id, email, name } = await userService.findUser(user.email);

    res.json({ id, email, name });
  } catch (e) {
    console.error(e);

    res.status(400).send({ error: { message: e.message, code: e.code } });
  }
}

module.exports = { getUser };
