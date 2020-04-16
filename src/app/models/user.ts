import {Role} from "./role.enum";
import {Gender} from "./gender.enum";

export class User {
  token?: string;

  id:string;
  email:string;
  password:string;
  role:Role;
  name:string;
  surname:string;
  //image
  birthdate:Date;
  gender:Gender;
  countryId:string;
  city:string;
  rating:string;
  about:string;


  constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }
}
