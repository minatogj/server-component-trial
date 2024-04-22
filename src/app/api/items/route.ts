import { NextResponse } from "next/server";
import { fixtureItems } from "./fixture";

export async function GET() {
  const data = fixtureItems;
  return NextResponse.json({ data: data }, { status: 200 });
}
