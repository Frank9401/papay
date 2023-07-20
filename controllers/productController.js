const assert = require("assert");
const Definer = require("../lib/mistakes");
const Product = require("../models/Product");

let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log(`POST, cont/getAllProducts`);
    const product = new Product();
    const result = await product.getAllProductsData(req.member, req.body);

    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`Error, cont/getAllProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.getChosenProduct = async (req, res) => {
  try {
    console.log(`GET, cont/getChosenProduct`);
    const product = new Product(),
     id = req.params.id,
     result = await product.getChosenProductData(req.member, id);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`Error, cont/getChosenProduct, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

/*********************
 * Bssr related api *
 ********************/

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    assert(req.files, Definer.general_err3);

    const product = new Product();
    let data = req.body;

    data.product_images = req.files.map((ele) => {
      return ele.path;
    });

    const result = await product.addNewProductData(data, req.member);
    const html = `<script> 
                       alert("new thing added succesfully");
                       window.location.replace('/resto/products/menu');
                  </script>`;
    res.end(html);
  } catch (error) {
    console.log(`Error, cont/addNewProduct, ${error.message}`);
  }
};

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
    const product = new Product();
    const id = req.params.id;

    const result = await product.updateChosenProductData(
      id,
      req.body,
      req.member._id
    );
    await res.json({ state: "success", data: result });
  } catch (error) {
    console.log(`Error, cont/updateChosenProduct, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};