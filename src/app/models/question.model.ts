export enum QuestionType {
  OPTION = 'Option',
  BOOLEAN = 'Boolean',
  ANSWER = 'Answer',
  SEQUENCE = 'Sequence'
}

export interface Question {
  id: number;
  // TODO: add quiz object
  type: QuestionType;
  image: File;
  text: string;
  active: boolean;
  // TODO: add language
}
