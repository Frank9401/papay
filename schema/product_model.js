const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_collection: {
    type: String,
    required: true,
    enum: {
      values: product_collection_enum,
      message: "{VALUE} isnot among permitted enum values",
    },
  },
});
