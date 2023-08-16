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

    meta: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// const Post = mongoose.models?.Post || mongoose.model("Post", PostSchema);

// export default Post;
