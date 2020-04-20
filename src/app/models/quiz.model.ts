import {User} from "./user";
import {Category} from "./category.model";

export enum StatusType {
  PENDING = "Pending",
  ACTIVE = "Active",
  DEACTIVATED = "Deactivated",
  DELETED = "Deleted"
}

export interface Quiz {
  id:number;
  name:string;
  author:string;
  category:string;
  date:string;
  description:string;
  status:StatusType;
  modification_time:string;
}
