import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "category",
    },

    children: [{ type: { name: String, price: Number } }],

    images: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Car = mongoose.models?.Car || mongoose.model("Car", CarSchema);

export default Car;
