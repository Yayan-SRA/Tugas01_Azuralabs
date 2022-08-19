const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/", controllers.api.v1.productController.productList);
apiRouter.get("/api/v1/categoryList", controllers.api.v1.productController.categoryList);
apiRouter.get("/api/v1/detail/:id", controllers.api.v1.productController.productDetail);
apiRouter.get("/api/v1/filter/:category", controllers.api.v1.productController.productFilter);
apiRouter.post("/api/v1/create", controllers.api.v1.productController.create);
// apiRouter.put("/api/v1/posts/:id", controllers.api.v1.productController.update);
// apiRouter.get("/api/v1/posts/:id", controllers.api.v1.productController.show);
// apiRouter.delete(
//   "/api/v1/posts/:id",
//   controllers.api.v1.productController.destroy
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
