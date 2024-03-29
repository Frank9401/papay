const Definer = require("../lib/mistakes");
const Member = require("../models/Member");
const Products = require("../models/Product");
const assert = require("assert");
const Restaurant = require("../models/Restaurant");

let restaurantController = module.exports;


restaurantController.getRestaurants = async (req, res) => {
  try {
    console.log("GET cont/getRestaurants")
    const data = req.query
    const restaurant = new Restaurant()
    const result = await restaurant.getRestaurantsData(req.member, data)

    await res.json({ state: "success", data: result })
  } catch (err) {
    console.log(`Error, cont/getRestaurants, ${err.message}`)
    res.json({ state: "fail", message: err.message })
  }
}


restaurantController.getChosenRestaurant = async (req, res) => {
  try {
    console.log("GET cont/getChosenRestaurant")
    const id = req.params.id
    const restaurant = new Restaurant();
    const result = await restaurant.getChosenRestaurantData(req.member, id)
    await res.json({ state: "success", data: result })
  } catch (err) {
    console.log(`Error, cont/getChosenRestaurant, ${err.message}`)
    res.json({ state: "fail", message: err.message })
  }
}

/*********************
 * BSSR related API *
 ********************/

restaurantController.home = async (req, res) => {
  try {
    console.log("GET: cont/home");
    res.render("home-page");
  } catch (err) {
    console.log(`ERROR, cont/home, ${err.message}`);
    // res.redirect('/resto');
    res.json({ state: "fail", message: err.message });
 }
};

restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("GET: cont/getMyRestaurantProducts");
    const product = new Products();
    const data = await product.getAllProductsDataResto(res.locals.member);

    res.render("restaurant-menu", {restaurant_data: data});
    // const data = await product.res.render("restaurant-menu");
  } catch (err) {
    console.log(`ERROR, cont/getMyRestaurantProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
    // res.redirect("/resto");
  }
};

restaurantController.getSignupMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getSignupMyRestaurant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR, cont/getSignupMyRestaurant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signupProcess");
    assert(req.file, Definer.general_err3);

     const new_member = req.body;
     new_member.mb_type = 'RESTAURANT';
     new_member.mb_image = req.file.path;
      // console.log('body:::', req.body);
      
      const member = new Member();
      const result = await member.signupData(new_member);
      assert(result, Definer.general_err3);

    req.session.member = result;
    res.redirect("/resto/products/menu");
    // SESSION

    // res.json({state: "succeed", data: new_member});
  } catch (err) {
    console.log(`ERROR, cont/signupProcess, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getLoginMyRestaurant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR, cont/getLoginMyRestaurant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.loginProcess = async (req, res) => {
  try {
    console.log("POST: cont/loginProcess");
      const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function () {
      result.mb_type === 'ADMIN' 
      ? res.redirect("/resto/all-restaurant")
      : res.redirect("/resto/products/menu");
    });

  } catch (err) {
    console.log(`ERROR, cont/loginProcess, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  try {
    console.log("GET cont/logout");
    // res.send("logout sahifadasiz");
    req.session.destroy(function(){
      res.redirect("/resto");
    });

  }catch(err) {
    console.log(`ERROR, cont/logout, ${err.message}`);
    res.json({ state: "fail", message: err.message });

  }

};

restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "fail",
      error: "only authenticated member with restaurant type",
    });
};

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "succeed", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};

restaurantController.validateAdmin = (req, res, next) => {
  if (req.session?.member?.mb_type === "ADMIN") {
    req.member = req.session.member;
    next();
  } else {
  const html = `<script>
                alert('Admin page: Permission denied!');
                window.location.replace('/resto');
       </script>`

  res.end(html)

   
    }
  };

restaurantController.getAllRestaurants = async (req, res) => {
  try{
    console.log("POST cont/getAllRestaurants");

    const restaurant = new Restaurant();
    const restaurants_data = await restaurant.getAllRestaurantsData();
    res.render("all-restaurants", {restaurants_data: restaurants_data});
    //todo: hamma restaurantlarni DBdan chaqiramiz

  }catch(err) {
    console.log(`ERROR, cont/getAllRestaurants, ${err.message}`);
    res.json({state: "fail", message: err.message});
  }
};

restaurantController.updateRestaurantByAdmin =  async (req, res) => {
  try{
    console.log("POST cont/updateRestaurantByAdminData");
    const restaurant = new Restaurant();
    const result = await restaurant.updateRestaurantByAdminData(req.body);
    await res.json({state: "success", data: result});

  }catch(err) {
    console.log(`ERROR, cont/updateRestaurantByAdminData, ${err.message}`);
    res.json({state: "fail", message: err.message});
  }

};