const Product = require("../models/Product");
const assert = require("assert");
const Definer = require("../lib/mistakes");
// const Product = require("../models/Product");

let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("GET: cont/getAllProducts");
  } catch (err) {
    console.log(`ERROR, cont/getAllProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    // console.log(req.files);
    assert(req.files, Definer.general_err3);

    const product = new Product();
    let data = req.body;
    // console.log(req.member);
    // TODO: product creation develop

    data.product_images = req.files.map((ele) => {
      return ele.path;
    });    


    const result = await product.addNewProductData(data, req.member);
    const html = `<script>
                    alert('new dish added successfully');
                    window.location.replace('/resto/products/menu');
                  </script>`;
    
    res.end(html);
  } catch (err) {
    console.log(`ERROR, cont/addNewProduct, ${err.message}`);
  }
}; 

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
  } catch (err) {
    console.log(`ERROR, cont/updateChosenProduct, ${err.message}`);
  }
};