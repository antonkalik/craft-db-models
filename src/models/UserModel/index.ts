import { Model } from 'src/models/Model';
import { Role } from 'src/@types';

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  role: Role;
}

export class UserModel extends Model {
  public static tableName = 'users';

  protected static async findByEmail(email: string): Promise<UserType | null> {
    return this.table.where('email', email).select('*').first();
  }
}
