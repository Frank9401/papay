const mongoose = require("mongoose")
const { } = require("../lib/config")
const Schema = mongoose.Schema

const orderItemSchema = new mongoose.Schema(
  {
    item_quantity: { type: Number, required: true },
    item_price: { type: Number, required: true },
    order_id: { type: Schema.Types.ObjectId, ref: "Order", required: false },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    }
  },
  { timestamps: { createdAt: true } }
)

module.exports = mongoose.model("OrderItem", orderItemSchema)
