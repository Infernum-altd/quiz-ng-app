import {StatusType} from "./status-type.enum";

export class Quiz {
  id: string;
  name: string;
  author: string;
  category_id: string;
  date: Date;
  image:File;
  description: string;
  status: StatusType;
  modificationTime: Date;
  category:string;
  modification_time: Date;
}
