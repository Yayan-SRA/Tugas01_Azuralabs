const productService = require("../../../services/productService")

module.exports = {
    productList(req,res) {
        productService
        .productList()
        .then((dataList) => {
            res.status(200).json({
                status:"Success",
                data : dataList
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Fail",
                message : err.message,
            })
        })
    },
    
    categoryList(req,res) {
        productService
        .categoryList()
        .then((list) => {
            res.status(200).json({
                status:"Success",
                data : {posts : list}
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Fail",
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
                status: "Success",
                data: result,
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Fail",
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
                status: "Success",
                data: result,
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: "Fail",
                messaga: err.messaga,
            })
        })
    },

    create(req, res) {
        productService
          .create(req.body)
          .then((product) => {
            res.status(201).json({
              status: "OK",
              data: product,
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