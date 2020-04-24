'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('user', [
     {
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo1@demo.com',
      gender: 'female',
      password: 'demo1@demoPass',
      dateOfBirth: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo2@demo.com',
      gender: 'female',
      password: 'demo2@demoPass',
      dateOfBirth: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
