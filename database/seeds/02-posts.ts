import { Knex } from 'knex';
import { faker } from '@faker-js/faker';
import type { Post } from '../../src/@types';

const tableName = 'posts';

export async function seed(knex: Knex): Promise<void> {
  await knex(tableName).del();

  const usersIds: Array<{ id: number }> = await knex('users').select('id');
  const posts: Post[] = [];

  usersIds.forEach(({ id: user_id }) => {
    const randomAmount = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < randomAmount; i++) {
      posts.push({
        title: faker.lorem.words(3),
        content: faker.lorem.paragraph(),
        user_id,
      });
    }
  });

  await knex(tableName).insert(posts);
}
