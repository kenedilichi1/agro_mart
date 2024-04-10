import { mock, Mock } from "ts-jest-mocker";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";
import { ObjectId } from "mongodb";
import { EntityStatusOptions } from "../../../common/dtos";

afterAll(async () => {
  jest.clearAllMocks();
});

describe("user service ", () => {
  let service: UserService;
  let userRepo: Mock<UserRepository>;

  beforeEach(() => {
    userRepo = mock(UserRepository);

    service = new UserService(userRepo);
  });

  let id: ObjectId;

  const mockNewUser = {
    email: "hello@gmail.com",
    password: "12345678",
    name: "hello",
  };

  const mockUser = {
    email: "hello@gmail.com",
    password: "12345678",
    name: "hello",
    createdAt: new Date(),
    updatedAt: new Date(),
    entityStatus: {
      at: new Date(),
      status: EntityStatusOptions.Enum.ACTIVE,
    },
  };

  it("create a new user", async () => {
    id = new ObjectId();
    userRepo.add.mockResolvedValueOnce(id);

    // WHEN
    const user = await service.addNewUser(mockNewUser);

    id = new ObjectId(user);
    // THEN
    expect(userRepo.add).toHaveBeenCalledTimes(1);
    expect(user).toBeDefined();
    expect(user.toString()).toEqual(id.toString());
  });

  it("finds one user with id", async () => {
    userRepo.fetchOne.mockResolvedValueOnce({ ...mockUser, _id: id });

    const user = await service.findOneUser(id.toString());

    expect(userRepo.fetchOne).toHaveBeenCalledTimes(1);
    expect(user).toBeDefined();
    expect(user).toEqual({ ...mockUser, _id: id });
  });

  it("finds one user with email", async () => {
    userRepo.fetchOne.mockResolvedValueOnce({ ...mockUser, _id: id });

    const user = await service.findOneUserWithEmail(mockNewUser.email);

    expect(userRepo.fetchOne).toHaveBeenCalledTimes(1);
    expect(user).toBeDefined();
    expect(user).toEqual({ ...mockUser, _id: id });
  });
});
