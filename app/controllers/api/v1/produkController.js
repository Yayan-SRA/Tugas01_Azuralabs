const produkService = require("../../../services/produkService")

module.exports = {
    listProduk(req,res) {
        produkService
        .listProduk()
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
    
    listKategori(req,res) {
        produkService
        .listKategori()
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

    detailProduk(req,res) {
        const id = req.params.id
        produkService
        .detailProduk({id})
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

    filterProduk(req,res) {
        console.log(req.params.kategori)
        const kate = req.params.kategori
        console.log("tes",kate)
        produkService
        .filterProduk({kate})
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
        produkService
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

      create(req, res) {
        produkService
          .create(req.body)
          .then((post) => {
            res.status(201).json({
              status: "OK",
              data: post,
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