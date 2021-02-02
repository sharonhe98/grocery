export class Grocery {
  // tslint:disable-next-line:variable-name
  _id: string;
  name: string;
  amount: number;
  desc: string;
  low: boolean;

  // tslint:disable-next-line:variable-name
  constructor(_id: string, name: string, amount: number, desc: string, low: boolean) {
    this._id = _id;
  }
}
