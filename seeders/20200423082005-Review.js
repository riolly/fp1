'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        CabangId: 1,
        UserId: 1,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 2,
        UserId: 2,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 3,
        UserId: 3,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 4,
        UserId: 4,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 5,
        UserId: 5,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 6,
        UserId: 1,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 7,
        UserId: 2,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 8,
        UserId: 3,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 9,
        UserId: 4,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 10,
        UserId: 5,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 11,
        UserId: 1,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 12,
        UserId: 2,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 13,
        UserId: 3,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 14,
        UserId: 4,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 15,
        UserId: 5,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 21,
        UserId: 1,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 22,
        UserId: 2,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 23,
        UserId: 3,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 24,
        UserId: 4,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 25,
        UserId: 5,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 16,
        UserId: 1,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 17,
        UserId: 2,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 18,
        UserId: 3,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 19,
        UserId: 4,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 20,
        UserId: 5,
        review: "Bagus",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {})
  }
};