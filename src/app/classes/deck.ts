import {Commander} from './commander';

export class Deck {
  constructor(
    public name: string,
    public race?:string,
    public description?:string,
    public commander?:Commander,
    public troops?: Array<any>,
    public _id?:string,
    public created_by?:string,
    public created?:string,
    public modified_by?:string,
    public modified?:string,
  ){}
}
