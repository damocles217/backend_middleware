const { createConnection } = require('typeorm');
const UserEntity = require('../models/UserEntity');

class UserRepository {
  userRepository;

  constructor() {
    this.createConnection().then(
      (userRepository) => (this.userRepository = userRepository)
    );
  }

  async createConnection() {
    const connection = await createConnection();
    const userRepository = connection.getRepository(UserEntity);
    return userRepository;
  }
}

module.exports = UserRepository;
