import { ObjectId } from "mongodb";
import { EntityStatusOptions } from "../../../common/dtos";
import { User } from "../dto/user.dto";
import { UserEntity } from "../entity/user.entity";

export interface UserService {
  addNewUser(user: User): Promise<string>;
  findOneUser(userId: string): Promise<UserEntity>;
  doesEmailExist(email: string): Promise<boolean>;
  findOneUserWithEmail(email: string): Promise<UserEntity>;
}

export class UserService {
  data: UserEntity[];
  constructor() {
    this.data = [];
  }

  private userDtoToEntity(user: User) {
    return {
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
      entityStatus: {
        at: new Date(),
        status: EntityStatusOptions.Enum.ACTIVE,
      },
      _id: new ObjectId(),
    };
  }

  async addNewUser(user: User): Promise<string> {
    const userEntity = this.userDtoToEntity(user);
    this.data.push(userEntity);
    return userEntity._id.toString();
  }
}
