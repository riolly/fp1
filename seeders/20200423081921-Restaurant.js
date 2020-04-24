'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: "KFC",
        owner: "Harland Sanders",
        email: "harland.sanders@kfc.com",
        username: "harland",
        password: "sanders",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "McDonald's",
        owner: "Ray Kroc",
        email: "ray.kroc@mcdonalds.com",
        username: "ray",
        password: "kroc",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Pizza Hut",
        owner: "Frank Karney",
        email: "frank.karney@pizzahut.com",
        username: "frank",
        password: "karney",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Sweet Green",
        owner: "Nicolas Jammet",
        email: "nicolas.jammet@sweetgreen.com",
        username: "nicolas",
        password: "jammet",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Burger King",
        owner: "James McLamore",
        email: "james.mclamore@burgerking.com",
        username: "james",
        password: "mclamore",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};