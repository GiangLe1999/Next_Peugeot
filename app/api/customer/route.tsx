import { isAdmin } from "@/lib/adminAuth";
import dbConnect from "@/lib/db";
import Customer from "@/model/Customer";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const admin = await isAdmin();

  if (!admin)
    return NextResponse.json(
      { error: "Unauthorized!" },
      {
        status: 401,
      }
    );

  await dbConnect();
  const customers = await Customer.find();

  return NextResponse.json(customers);
}

export async function POST(req: Request) {
  const { name, carType, phone } = await req.json();

  if (!name && !name.trim() && !carType && !phone.trim() && !phone)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const customer = new Customer({
    name,
    carType,
    phone,
  });

  await customer.save();

  return NextResponse.json(customer, {
    status: 201,
  });
}
