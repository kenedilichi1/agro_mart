import * as z from "zod";

export const FormDataType = z.object({
  name: z.string({ required_error: "name is required" }).min(3),
  farmName: z.string({ required_error: "farm name is required" }).min(3),
  contactAddress: z
    .string({ required_error: "contact address is required " })
    .email(),
});
export type FormDataType = z.infer<typeof FormDataType>;
