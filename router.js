const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const orderController = require('./controllers/orderController');
const restaurantController = require("./controllers/restaurantController");
const communityController = require('./controllers/communityController');
const followController = require('./controllers/followController')
const uploader_community = require("./utils/upload-multer")('community');

const router_bssr = require("./router_bssr");
const uploader_member = require("./utils/upload-multer")('members');



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

  router.get(
    "/orders",
  memberController.retrieveAuthMember,
  orderController.getMyOrders
  );

  router.post(
    "/orders/edit",
  memberController.retrieveAuthMember,
  orderController.editChosenOrder
  );

  //community related routers
router.post(
  "/community/image",
uploader_community.single("community_image"),
communityController.imageInsertion
);


router.post(
  "/community/create",
  memberController.retrieveAuthMember,
  communityController.createArticle
  );

  router.get(
    "/community/articles",
  memberController.retrieveAuthMember,
  communityController.getMemberArticles
);

router.get(
  "/community/target",
  memberController.retrieveAuthMember,
  communityController.getArticles
);

router.get(
  "/community/single-article/:art_id",
  memberController.retrieveAuthMember,
  communityController.getChosenArticle
);

//following related routers
router.post("/follow/subscribe",
  memberController.retrieveAuthMember,
  followController.subscribe
);
router.post("/follow/unsubscribe",
  memberController.retrieveAuthMember,
  followController.unsubscribe
);

router.get("/follow/followings",
  followController.getMemberFollowings
);

router.get("/follow/followers",
  memberController.retrieveAuthMember,
  followController.getMemberFollowers
);

  module.exports = router;