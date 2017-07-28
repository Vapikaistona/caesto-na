export class User {
  constructor(
    public username: string,
    public firstname:string,
    public lastname:string,
    public lastname2: string,
    public gender: string,
    public email: string,
    public age: number,
    public lvl: number,
    public _id?:string,
    public password?:string
  ){}
}
