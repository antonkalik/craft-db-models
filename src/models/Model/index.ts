import { database } from 'root/database';

export abstract class Model {
  protected static tableName?: string;

  protected static get table() {
    if (!this.tableName) {
      throw new Error('The table name must be defined for the model.');
    }
    return database(this.tableName);
  }

  public static async insert<Payload>(data: Payload): Promise<{
    id: number;
  }> {
    const [result] = await this.table.insert(data).returning('id');
    return result;
  }

  public static async findOneById<Result>(id: number): Promise<Result> {
    return this.table.where('id', id).select('*').first();
  }

  public static async findAll<Item>(): Promise<Item[]> {
    return this.table.select('*');
  }

  public static async updateOneById<Payload>(
    id: number,
    data: Payload
  ): Promise<{
    id: number;
  } | null> {
    const [result] = await this.table.where({ id }).update(data).returning('id');
    return result;
  }
}
