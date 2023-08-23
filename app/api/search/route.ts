import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query && !query?.trim())
      return NextResponse.json(
        { error: "Invalid query!" },
        {
          status: 422,
        }
      );

    await dbConnect();

    const cars = await Car.find({
      name: { $regex: query, $options: "i" },
    });

    return NextResponse.json(cars);
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
