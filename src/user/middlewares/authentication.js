const { JWT_SECRET } = require('../../config/constants');
const RequestError = require('../../config/Error');
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const authorizationHeader = req.get('Authorization');
  try {
    if (!authorizationHeader)
      throw new RequestError(
        'Not authorized to perform this action, please log in',
        'BA001'
      );

    const decoded = jwt.verify(authorizationHeader, JWT_SECRET);

    req.user = decoded;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).send({ error: { message: e.message, code: e.code } });
  }
};

module.exports = { authenticateUser };
