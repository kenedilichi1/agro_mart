import { z } from "zod";
import { HttpResponsePayload } from "../../../common/dtos";
import zodToJsonSchema from "zod-to-json-schema";

export const AuthDto = z.object({
  token: z.string(),
  userId: z.string(),
});
export type AuthDto = z.infer<typeof AuthDto>;

export const authHttpResponse = zodToJsonSchema(
  HttpResponsePayload.extend({
    payload: AuthDto,
  })
);

export const LoginDto = z.object({
  name: z.string({ required_error: "name is required" }).min(3),
  farmName: z.string({ required_error: "farm name is required" }).min(3),
  contactAddress: z
    .string({ required_error: "contact address is required " })
    .email(),
});
export type LoginDto = z.infer<typeof LoginDto>;
export const loginSchema = zodToJsonSchema(LoginDto, { name: "loginSchema" });
