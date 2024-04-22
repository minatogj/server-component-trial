import type { Item, PrismaPromise } from "@prisma/client";
import { prisma } from "..";
import fixture from "./fixture.json";

export const item = () => {
  const res: PrismaPromise<Item>[] = [];
  fixture.forEach((data) => {
    const row = prisma.item.create({ data });
    res.push(row);
  });
  return res;
};
