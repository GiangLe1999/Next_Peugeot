import { Types } from "mongoose";

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
