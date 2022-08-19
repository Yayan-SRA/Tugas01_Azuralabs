'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategoris', [{
      macam: "Minuman",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Makanan",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Snack",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Kebutuhan Dapur",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Kebutuhan Anak",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Perawatan Diri & Kesehatan",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Makanan Beku",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Lain-lain",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      macam: "Paket Promo",
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
