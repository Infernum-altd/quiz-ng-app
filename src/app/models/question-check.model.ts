import {Answer} from "./answer.model";

export class QuestionCheckModel {
  id: number;
  image:String;
  quizId: number;
  type: string;
  text: string;
  active: boolean;
  languageId: number;
  answers: Answer[];
  checked = false;
}
