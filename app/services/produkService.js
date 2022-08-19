const produkRepository = require("../repositories/produkRepository");

module.exports = {
    
    async listProduk() {
    try {
      const dataList = await produkRepository.findAllProduk();
      return dataList
    } catch (err) {
      throw err;
    }
  },

  async listKategori() {
    try {
      const kategoriList = await produkRepository.findAllKategori();
      return kategoriList
    } catch (err) {
        throw err;
    }
  },
  
  async detailProduk({id}) {
    try {
        const result = await produkRepository.detailProduk({id});
        return result;
    } catch (error) {
        throw err;
    }
  },

  async filterProduk({kate}) {
    try {
        const result = await produkRepository.filterProduk({kate});
        return result;
    } catch (error) {
        throw err;
    }
},

create(requestBody) {
  return produkRepository.create(requestBody);
},
};
