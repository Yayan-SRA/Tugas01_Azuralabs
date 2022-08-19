"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Produk.belongsTo(models.Kategori, {
            foreignKey: 'id_kategori'
        })
    }
  }
  Produk.init(
    {
    id_kategori: DataTypes.INTEGER,
    nama_produk: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Produk",
    }
  );
  return Produk;
};
