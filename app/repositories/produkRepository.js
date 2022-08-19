const { Produk } = require("../models");
const { Kategori } = require("../models");

module.exports = {
    findAllProduk() {
        return Produk.findAll({
            include: [Kategori]
        });
    },

    findAllKategori() {
        return Kategori.findAll();
    },
    
    detailProduk({id}) {
        return Produk.findOne({
            where: {id:id},
            include: [Kategori]
        });
    },
    
    filterProduk({kate}) {
        return Produk.findAll({
            where:{id_kategori:kate},
            include: [Kategori]
        });
    },

    create(createArgs) {
    return Produk.create(createArgs);
    },
};
