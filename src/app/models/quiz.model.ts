import {User} from './user';
import {Category} from './category.model';


export enum StatusType {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
  DELETED = 'DELETED'
}

export interface Quiz {
  id:number;
  name:string;
  author:User;
  category:Category;
  date:string;
  description:string;
  status:StatusType;
  modification_time:string;
}
