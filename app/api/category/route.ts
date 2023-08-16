import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { Category } from "@/model/Category";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
  const categories = await Category.find().populate({
    path: "cars",
    model: Car,
  });

  return NextResponse.json(categories);
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

  const { name, slug } = await req.json();

  if (!name && !name.trim() && !slug && !slug.trim())
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const category = new Category({
    name,
    slug,
  });

  await category.save();

  return NextResponse.json(category, {
    status: 201,
  });
}
