const { EntitySchema } = require('typeorm');

const UserEntity = new EntitySchema({
  name: 'User',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
    },
  },
});

module.exports = UserEntity;
