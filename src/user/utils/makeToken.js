const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/constants');
function makeToken(body) {
  return jwt.sign(body, JWT_SECRET, {
    expiresIn: '24h',
  });
}

module.exports = { makeToken };
