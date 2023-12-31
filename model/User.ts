import mongoose, { Model } from "mongoose";

export interface UserModelSchema {
  name: string;
  email: string;
  role: "user" | "admin";
  provider: "google";
}

const UserSchema = new mongoose.Schema<UserModelSchema>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    provider: { type: String, enum: ["google"] },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User as Model<UserModelSchema>;
