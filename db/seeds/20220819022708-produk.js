'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produks', [{
      id_kategori: 1,
      nama_produk: "Fanta",
      harga: "5000",
      foto: "fanta.jpg",
      deskripsi: "minuman soda dengan rasa enak",
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
