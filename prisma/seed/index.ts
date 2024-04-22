import { PrismaClient } from "@prisma/client";
import { item } from "./item";

export const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);
  await prisma.$transaction([...item()]);
  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
