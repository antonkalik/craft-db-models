export enum Role {
  Admin = 'admin',
  User = 'user',
}

export type User = {
  email: string;
  first_name: string;
  last_name: string;
  role: Role;
};

export type Post = {
  title: string;
  content: string;
  user_id: number;
};
