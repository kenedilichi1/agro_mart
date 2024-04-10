import { Mock, mock } from "ts-jest-mocker";
import { AuthService } from "../service/auth.service";
import { UserService } from "../../user/service/user.service";
import { UserRepository } from "../../user/repository/user.repository";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { EntityStatusOptions, JwtFor } from "../../../common/dtos";
import { JWT_SECRET } from "../../../common/config";

afterAll(async () => {
  jest.clearAllMocks();
});

describe("auth service", () => {
  let authService: AuthService;
  let userService: UserService;
  let userRepo: Mock<UserRepository>;

  let id: ObjectId = new ObjectId();
  const mockNewUser = {
    email: "hello@gmail.com",
    password: "12345678",
    name: "hello",
  };

  const token = jwt.sign(
    { userId: id.toString(), jwtFor: JwtFor.Enum.authorized },
    JWT_SECRET as string,
    {
      algorithm: "HS256",
      expiresIn: "24h",
    }
  );

  beforeEach(() => {
    userRepo = mock(UserRepository);
    userService = new UserService(userRepo);
    authService = new AuthService(userService);
  });

  it("should sign a user up", async () => {
    userRepo.add.mockResolvedValueOnce(id);
    const user = await authService.signup(mockNewUser);

    expect(user).toStrictEqual({ token, userId: id.toString() });
  });

  it("should log a user up", async () => {
    userRepo.fetchOne.mockResolvedValueOnce({
      ...mockNewUser,
      _id: id,
      createdAt: new Date(),
      updatedAt: new Date(),
      entityStatus: { at: new Date(), status: EntityStatusOptions.Enum.ACTIVE },
    });

    const user = await authService.login({
      email: mockNewUser.email,
      password: mockNewUser.password,
    });

    expect(user).toStrictEqual({ token, userId: id.toString() });
  });
});
