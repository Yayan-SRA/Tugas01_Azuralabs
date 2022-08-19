const { Product } = require("../models");
const { Category } = require("../models");

module.exports = {
    findAllProduct() {
        return Product.findAll({
            include: [Category]
        });
    },

    findAllCategory() {
        return Category.findAll();
    },
    
    productDetail({id}) {
        return Product.findOne({
            where: {id:id},
            include: [Category]
        });
    },
    
    productFilter({kate}) {
        return Product.findAll({
            where:{id_category:kate},
            include: [Category]
        });
    },

    create(createArgs) {
    return Product.create(createArgs);
    },
};
