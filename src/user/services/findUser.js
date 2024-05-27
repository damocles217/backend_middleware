const bcrypt = require('bcrypt');
const UserRepository = require('./userRepository');

class FindUserService extends UserRepository {
  async findUser(emailSearch) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: emailSearch,
        },
      });

      return user;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

module.exports = new FindUserService();
