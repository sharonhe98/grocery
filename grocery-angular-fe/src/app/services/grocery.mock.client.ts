import {Grocery} from '../models/grocery/grocery.model.client';

const grocery: Grocery = {_id: '0', name: 'broccoli', amount: 1, desc: 'bro. coli', low: false};
const grocery2: Grocery = {_id: '1', name: 'honey', amount: 1, desc: 'bee vomit', low: true};
const grocery3: Grocery = {_id: '2', name: 'yogurt', amount: 15, desc: 'like the ylvis song ykno?', low: false};
export const groceryMock: Grocery[] = [grocery, grocery2, grocery3];
