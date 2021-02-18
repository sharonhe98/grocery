export class User {
  _id: string;
  username: string;
  password: string;
  role: ['ADMIN', 'USER'];

  constructor(_id: string, username: string, password: number, role: string) {
    this._id = _id;
  }
}
