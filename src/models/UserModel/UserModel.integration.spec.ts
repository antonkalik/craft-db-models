import { UserModel, UserType } from '.';
import { database } from 'root/database';
import { faker } from '@faker-js/faker';
import { Role } from 'src/@types';

const test_user: Omit<UserType, 'id'> = {
  email: faker.internet.email().toLowerCase(),
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  password: 'test_password',
  role: Role.User,
};

describe('UserModel', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';

    await database.migrate.latest();
  });

  afterEach(async () => {
    await database(UserModel.tableName).del();
  });

  afterAll(async () => {
    await database.migrate.rollback();
    await database.destroy();
  });


  it('should insert and retrieve user', async () => {
    await UserModel.insert<typeof test_user>(test_user);
    const allResults = await UserModel.findAll<UserType>();

    expect(allResults.length).toEqual(1);
    expect(allResults[0].first_name).toEqual(test_user.first_name);
  });

  it('should insert user and retrieve by email', async () => {
    const { id } = await UserModel.insert<typeof test_user>(test_user);
    const result = await UserModel.findOneById<UserType>(id);

    expect(result.first_name).toEqual(test_user.first_name);
  });
});
