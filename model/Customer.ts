import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
    trim: true,
  },

  carType: {
    type: String,
    enum: ["2008", "3008", "5008", "traveller"],
    required: true,
  },
});

const Customer =
  mongoose.models?.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;
