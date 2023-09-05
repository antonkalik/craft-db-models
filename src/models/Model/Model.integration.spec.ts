import { Model } from '.';
import { database } from 'root/database';

const testTableName = 'test_table';

class TestModel extends Model {
  protected static tableName = testTableName;
}

type TestType = {
  id: number;
  name: string;
};

describe('Model', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';

    await database.schema.createTable(testTableName, table => {
      table.increments('id').primary();
      table.string('name');
    });
  });

  afterEach(async () => {
    await database(testTableName).del();
  });

  afterAll(async () => {
    await database.schema.dropTable(testTableName);
    await database.destroy();
  });

  it('should insert a row and fetch it', async () => {
    await TestModel.insert<Omit<TestType, 'id'>>({ name: 'TestName' });
    const allResults = await TestModel.findAll<TestType>();

    expect(allResults.length).toEqual(1);
    expect(allResults[0].name).toEqual('TestName');
  });

  it('should insert a row and fetch it by id', async () => {
    const { id } = await TestModel.insert<Omit<TestType, 'id'>>({ name: 'TestName' });
    const result = await TestModel.findOneById<TestType>(id);

    expect(result.name).toEqual('TestName');
  });
});
