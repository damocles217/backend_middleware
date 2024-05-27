const bcrypt = require('bcrypt');
const UserRepository = require('./userRepository');

class CreateUserService extends UserRepository {
  async createUser(body) {
    try {
      const password = body.password;
      const salts = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salts);

      const user = await this.userRepository.save({
        ...body,
        password: hashedPassword,
      });
      return user;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

module.exports = new CreateUserService();
