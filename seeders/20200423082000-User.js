'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: "Daniel Craig",
        birth: 1968 ,
        email: "daniel.craig@gmail.com",
        username: "daniel",
        password: "craig",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Vin Diesel",
        birth: 1967,
        email: "vin.diesel@gmail.com",
        username: "vin",
        password: "diesel",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Johny Depp",
        birth: 1963,
        email: "johny.depp@gmail.com",
        username: "johny",
        password: "depp",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Angelina Jolie",
        birth: 1975,
        email: "angelina.jolie@gmail.com",
        username: "angelina",
        password: "jolie",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Megan Fox",
        birth: 1986,
        email: "megan.fox@gmail.com",
        username: "megan",
        password: "fox",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};