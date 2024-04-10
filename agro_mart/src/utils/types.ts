import * as z from "zod";

export const ProductData = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  location: z.string(),
  price: z.number(),
  productImage: z.string().url(),
});
export type ProductData = z.infer<typeof ProductData>;
