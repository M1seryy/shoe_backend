const { Schema, model } = require("mongoose");
const shoe = new Schema({
  brand_name: {
    type: String,
    required: [true, "Set name for brand"],
  },
  category: {
    type: String,
  },
  color: {
    type: String,
  },
  name: {
    type: String,
  },
  original_picture_url: {
    type: String,
  },
  retail_price_cents: {
    type: String,
  },
  id: {
    type: Number,
  },
  favourite: {
    type: Boolean,
  },
});
const Shoes = model("sneakers", shoe);

module.exports = Shoes;
