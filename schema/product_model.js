const mongoose = require("mongoose");
const {
  product_collection_enum,
  product_status_enum,
  product_size_enum,
  product_volume_enum,
} = require("../lib/config");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_collection: {
      type: String,
      required: true,
      enum: {
        values: product_collection_enum,
        message: "{VALUE} isnot among permitted enum values",
      },
    },
    product_status: {
      type: String,
      required: false,
      default: "PAUSED",
      enum: {
        values: [],
        message: "{VALUE} isnot among permitted enum values",
      },
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_discount: {
      type: Number,
      required: false,
      default: 0,
    },
    product_left_cnt: {
      typ: Number,
      required: true,
    },
    product_size: {
      type: String,
      default: "normal",
      required: function () {
        const sized_list = ["dish", "salad", "dessert"];
        return sized_list.includes(this.product_collection);
      },
      enum: {
        values: [],
        message: "{VALUE} isnot among permitted enum values",
      },
    },
    product_volume: {
      type: String,
      default: 1,
      required: function () {
        return this.product_collection === "drink";
      },
      enum: {
        values: product_volume_enum,
        message: "{VALUE} isnot among permitted enum values",
      },
    },
    product_description: { type: String, required: true },
    product_image: { type: Array, required: false, default: [] },
    product_likes: {
      type: Number,
      required: false,
      default: 0,
    },
    product_views: {
      type: Number,
      required: false,
      default: 0,
    },
    restaurant_mb_id: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: false,
    },
  },
  { timestamps: true }
); //createdAt, updateAt

productSchema.index(
  { restaurant_mb_id: 1, product_name: 1, product_size: 1, product_volume: 1 },
  { unique: true }
);

module.exports = mongoose.model("Product", productSchema);
