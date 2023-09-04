import { Knex } from 'knex';
import { faker } from '@faker-js/faker';
import { User, Role } from '../../src/@types';

const tableName = 'users';

export async function seed(knex: Knex): Promise<void> {
  await knex(tableName).del();
  const users: User[] = [...Array(10).keys()].map(key => ({
    email: faker.internet.email().toLowerCase(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    role: Role.User,
  }));
  await knex(tableName).insert(users.map(user => ({ ...user, password: 'test_password' })));
}
