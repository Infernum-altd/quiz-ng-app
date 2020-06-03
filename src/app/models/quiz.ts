import {StatusType} from './status-type.enum';
import {Question} from './question.model';

export class Quiz {
  id: string;
  name: string;
  author: string;
  categoryId: string;
  date: Date;
  image: string;
  description: string;
  status: StatusType;
  category: string;
  modificationTime: Date;
  favorite: boolean;
  tags: string[];
  questions: Question[];
}
