import { Model } from 'src/models/Model';

export type PostType = {
  id: number;
  title: string;
  content: string;
  user_id: number;
};

export class PostModel extends Model {
  public static tableName = 'posts';

  protected static async findAllByUserId(user_id: number): Promise<PostType[]> {
    if (!user_id) return [];
    return this.table.where('user_id', user_id).select('*');
  }
}
