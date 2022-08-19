const productRepository = require("../repositories/productRepository");

module.exports = {
    
    async productList() {
    try {
      const dataList = await productRepository.findAllProduct();
      return dataList
    } catch (err) {
      throw err;
    }
  },

  async categoryList() {
    try {
      const categoryList = await productRepository.findAllCategory();
      return categoryList
    } catch (err) {
        throw err;
    }
  },
  
  async productDetail({id}) {
    try {
        const result = await productRepository.productDetail({id});
        return result;
    } catch (error) {
        throw err;
    }
  },

  async productFilter({kate}) {
    try {
        const result = await productRepository.productFilter({kate});
        return result;
    } catch (error) {
        throw err;
    }
},

create(requestBody) {
  return productRepository.create(requestBody);
},
};
