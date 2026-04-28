'use strict';

const { now } = require('sequelize/lib/utils');
const city = require('../models/city');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert('airports' , [
      {
        name: 'Kempegowda International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysore Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangaluru International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Noida International Airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Navi Mumbai International Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
