import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
  const cars = await Car.find();

  return NextResponse.json(cars);
}
