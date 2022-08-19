const productService = require("../../../services/productService")

module.exports = {
    productList(req,res) {
        productService
        .productList()
        .then((dataList) => {
            res.status(200).json({
                status:"Berhasil Get Data",
                data : dataList
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Gagal Get Data",
                message : err.message,
            })
        })
    },
    
    categoryList(req,res) {
        productService
        .categoryList()
        .then((kategoriList) => {
            res.status(200).json({
                status:"Berhasil Get Data Kategori",
                data : {posts : kategoriList}
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Gagal Get Data Kategori",
                message : err.message,
            })
        })
    },

    productDetail(req,res) {
        const id = req.params.id
        productService
        .productDetail({id})
        .then((result) => {
            res.status(200).json({
                status: "Berhasil get detail",
                data: result,
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Gagal get detail",
                messaga: err.messaga,
            })
        })
    },

    productFilter(req,res) {
        console.log(req.params.category)
        const kate = req.params.category
        console.log("tes",kate)
        productService
        .productFilter({kate})
        .then((result) => {
            res.status(200).json({
                status: "Berhasil get data",
                data: result,
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Gagal get data",
                messaga: err.messaga,
            })
        })
    },

    create(req, res) {
        productService
          .create(req.body)
          .then((produk) => {
            res.status(201).json({
              status: "OK",
              data: produk,
            });
          })
          .catch((err) => {
            res.status(422).json({
              status: "FAIL",
              message: err.message,
            });
          });
      },

};