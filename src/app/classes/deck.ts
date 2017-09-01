import {User} from './user';
import {Commander} from './commander';
import {Troop} from './troop';

export class Deck {
  constructor(
    public name: string,
    public race?:string,
    public description?:string,
    public commander?:Commander,
    public troops?: Array<Troop>,
    public _id?:string,
    public created_by?:string,
    public created?:string,
    public modified_by?:string,
    public modified?:string,
  ){}
}
