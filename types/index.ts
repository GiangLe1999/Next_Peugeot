import { Date, Types } from "mongoose";

export interface CarType {
  _id: Types.ObjectId;
  name: string;
  price: number;
  slug: string;
  category: Types.ObjectId;
  children: [{ name: string; price: number }];
  images: [string];
}

export interface CategoryType {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  cars: [CarType];
}

export interface CustomerType {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  carType: string;
  createdAt: number;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}
