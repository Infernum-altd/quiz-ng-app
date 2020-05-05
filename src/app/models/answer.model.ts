import { Question } from './question.model';

export interface Answer {
  id: number;
  question: Question;
  text: string;
  image: File;
  isCorrect: boolean;
  answer: Answer;
}
