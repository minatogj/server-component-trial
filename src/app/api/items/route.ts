import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.item.findMany();
  return NextResponse.json({ data: result }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const result = await prisma.item.create({
    data: {
      name: body.name,
      description: body.description,
    },
  });
  return NextResponse.json({ data: result }, { status: 200 });
}
