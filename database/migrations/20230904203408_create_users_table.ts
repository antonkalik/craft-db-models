import { Knex } from 'knex';
import { Role } from '../../src/@types';

export const createTable = (tableName: string, knex: Knex): Promise<void> => {
  return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
    table.increments('id');
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.enu('role', [Role.User, Role.Admin]).notNullable();
    table.timestamps(true, true);
  });
};

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
  return createTable(tableName, knex);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
