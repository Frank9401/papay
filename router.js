const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const router_bssr = require("./router_bssr");

/**********************************************
 *           REST API                         *
 **********************************************/


//memberga related routers
// router.get("./", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
    "/member/:id",
     memberController.retrieveAuthMember,
     memberController.getChosenMember
      );


// Product related routers
router.post(
    "/products", 
    memberController.retrieveAuthMember,
    productController.getAllProducts,
    );



//boshqa routerlar

// router.get("/menu", function (req, res) {
//     res.send("Menu sahifadasiz");
// });

// router.get("/community", function (req, res) {
//     res.send("Jamiyat sahifasidasiz");
// });


module.exports = router;