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

  quizId: number;
  name: string;

  questions: Question[] = [];


  constructor(router: Router) {
    let state = router.getCurrentNavigation().extras.state;
    this.quizId = state.id;
    this.name = state.name;
  }

  ngOnInit(): void {
  }

  addQuestion() {
    this.questions.push({
      id: null,
      quizId: this.quizId,
      type: 'OPTION',
      text: '',
      active: true
    });
  }

  removeQuestion(i: number) {
    this.questions.splice(i, 1);
  }

  onSubmit() {
    console.log("submit")
    this.questionComponents.toArray().forEach(el => {
      el.quizId = this.quizId;
      el.save();
    })

    alert("Success!");
  }
}
