'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      id_category: 1,
      product_name: "Fanta",
      price: "5000",
      image: "fanta.jpg",
      describtion: "minuman soda dengan rasa enak",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ],
      {});
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
