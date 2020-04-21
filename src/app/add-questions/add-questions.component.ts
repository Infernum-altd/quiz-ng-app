import { QuestionComponent } from './../question/question.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Question, QuestionType } from '../models/question.model';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  @ViewChildren(QuestionComponent) questionComponents!: QueryList<QuestionComponent>;

  questionId: number;
  name: string;

  questions: Question[] = [];


  constructor(router: Router) {
    let state = router.getCurrentNavigation().extras.state;
    this.questionId = state.id;
    this.name = state.name;
  }

  ngOnInit(): void {
  }

  addQuestion() {
    this.questions.push({
      id: null,
      type: QuestionType.OPTION,
      image: null,
      text: '',
      active: true
    });
  }

  removeQuestion(i: number) {
    this.questions.splice(i, 1);
  }
}
