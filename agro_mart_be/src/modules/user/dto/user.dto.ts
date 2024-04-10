import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

export const User = z.object({
  name: z.string({ required_error: "name is required" }).min(3),
  farmName: z.string({ required_error: "farm name is required" }).min(3),
  contactAddress: z
    .string({ required_error: "contact address is required " })
    .email(),
});

export type User = z.infer<typeof User>;
export const user = zodToJsonSchema(User);
