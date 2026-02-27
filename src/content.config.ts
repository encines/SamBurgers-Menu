import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menu = defineCollection({
  loader: glob({ base: "./src/content/menu", pattern: "**/*.yaml" }),
  schema: z.object({
    title: z.string(),
    price: z.number().positive(),
    description: z.string(),
    category: z.enum([
      "Hamburguesas",
      "Hot Dogs",
      "Otros",
      "Bebidas",
      "Extras",
    ]),
    img: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { menu };
