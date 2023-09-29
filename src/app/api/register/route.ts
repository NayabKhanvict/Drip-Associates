import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
export async function POST(req: any) {
  try {
    const { fname, lname, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 11);
    await connectMongoDB();
    await User.create({ fname, lname, email, password: hashedPassword });
    return NextResponse.json({ message: "Use Registred" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the usr." },
      { status: 500 }
    );
  }
}
