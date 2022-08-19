"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Product.belongsTo(models.Category, {
            foreignKey: 'id_category'
        })
    }
  }
  Product.init(
    {
    id_category: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    describtion: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
