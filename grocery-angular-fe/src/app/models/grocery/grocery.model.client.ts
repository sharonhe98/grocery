export class Grocery {
  // tslint:disable-next-line:variable-name
  _id: string;
  name: string;
  amount: number;
  desc: string;
  low: boolean;
  userId: string;

  // tslint:disable-next-line:variable-name
  constructor(_id: string, name: string, amount: number, desc: string, low: boolean, userId: string) {
    this._id = _id;
  }
}
