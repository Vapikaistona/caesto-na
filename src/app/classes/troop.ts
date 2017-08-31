export class Troop {
  constructor(
    public cardname: string,
    public race?:string,
    public habilities?:string,
    public cost?: number,
    public attack?: number,
    public life?: number,
    public movement?: number,
    public _id?:string,
    public created_by?:string,
    public created?:string,
    public modified_by?:string,
    public modified?:string,
  ){}
}
