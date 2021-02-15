export interface User{
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  token?: string;
  expiresIn?: number;
  book?:string;
}
