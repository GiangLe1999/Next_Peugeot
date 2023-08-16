import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "car" }],
  },
  { timestamps: true }
);

export const Category =
  mongoose.models?.Category || mongoose.model("Category", CategorySchema);
