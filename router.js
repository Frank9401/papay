const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const restaurantController = require("./controllers/restaurantController");
const router_bssr = require("./router_bssr");



/*******************************
 *          Rest API           *
 ******************************/
 
//member related routers

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication)
router.get("/member/:id", 
memberController.retrieveAuthMember,
memberController.getChosenMember)


//product related products

router.post(
    "/products",
memberController.retrieveAuthMember,
productController.getAllProducts
);

router.get(
    "/products/:id", 
memberController.retrieveAuthMember, 
productController.getChosenProduct
);

router.get(
    "/restaurants",
memberController.retrieveAuthMember,
restaurantController.getAllRestaurants
);

router.get(
    "/restaurants/:id",
  memberController.retrieveAuthMember,
  restaurantController.getChosenRestaurant
  );

  // Order related routers

  router.post(
    "/orders/create",
    memberController.retrieveAuthMember,
    orderController.createOrder
  );

module.exports = router;