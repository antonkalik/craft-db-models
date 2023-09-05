import Knex from 'knex';
import configs from '../knexfile';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('configs', configs);

export const database = Knex(configs[process.env.NODE_ENV || 'development']);
