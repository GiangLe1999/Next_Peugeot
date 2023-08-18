import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { Category } from "@/model/Category";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  await dbConnect();
  const car = await Car.findOne({ slug }).populate({
    path: "category",
    model: Category,
  });

  return NextResponse.json(car);
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (!secret || secret !== process.env.SECRET_KEY)
    return NextResponse.json(
      { error: "Unauthorized request!" },
      {
        status: 403,
      }
    );

  const { name, price, category, images, slug } = await req.json();

  if (!name && !name.trim() && !slug && !slug.trim() && !price)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const car = new Car({
    name,
    price,
    category,
    images,
    slug,
  });

  await car.save();

  return NextResponse.json(car, {
    status: 201,
  });
}
