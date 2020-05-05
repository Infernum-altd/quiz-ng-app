import { StatusType } from './quiz.model';
import { Timestamp } from 'rxjs';

export interface Quiz {
  id: number;
  name: string;
  author: number;
  category_id: number;
  date: string;
  description: string;
  status: string;
  modification_time: string;
}
