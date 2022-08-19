const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/api/v1/listProduk", controllers.api.v1.produkController.listProduk);
apiRouter.get("/api/v1/listKategori", controllers.api.v1.produkController.listKategori);
apiRouter.get("/api/v1/detail/:id", controllers.api.v1.produkController.detailProduk);
apiRouter.get("/api/v1/filter/:kategori", controllers.api.v1.produkController.filterProduk);
apiRouter.post("/api/v1/create", controllers.api.v1.produkController.create);
// apiRouter.put("/api/v1/posts/:id", controllers.api.v1.produkController.update);
// apiRouter.get("/api/v1/posts/:id", controllers.api.v1.produkController.show);
// apiRouter.delete(
//   "/api/v1/posts/:id",
//   controllers.api.v1.produkController.destroy
// );

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
