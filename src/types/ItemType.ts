import { itemSchema } from "@/schemas/itemSchema";
import { z } from "zod";

export type ItemType = z.infer<typeof itemSchema>;
