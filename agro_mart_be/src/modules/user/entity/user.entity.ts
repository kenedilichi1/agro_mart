import { ObjectId } from "mongodb";
import { z } from "zod";
import { EntityStatus } from "../../../common/dtos";

export const UserEntity = z.object({
  _id: z.instanceof(ObjectId),
  name: z.string({ required_error: "name is required" }).min(3),
  farmName: z.string({ required_error: "farm name is required" }).min(3),
  contactAddress: z
    .string({ required_error: "contact address is required " })
    .email(),
  createdAt: z.date(),
  updatedAt: z.date(),
  entityStatus: EntityStatus,
});
export type UserEntity = z.infer<typeof UserEntity>;
