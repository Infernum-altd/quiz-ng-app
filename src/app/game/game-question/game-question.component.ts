import { GameStringAnswerComponent } from './../game-string-answer/game-string-answer.component';
import { GameBooleanAnswerComponent } from './../game-boolean-answer/game-boolean-answer.component';
import { GameOptionalAnswerComponent } from './../game-optional-answer/game-optional-answer.component';
import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { Question, QuestionType } from 'src/app/models/question.model';
import { AnswerComponent } from 'src/app/answer/answer.component';
import { GameSequenceAnswerComponent } from '../game-sequence-answer/game-sequence-answer.component';

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.css']
})
export class GameQuestionComponent implements OnInit, AfterViewInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) answerHost;
  @ViewChild(GameAnswerComponent) answerComponent: AnswerComponent;

  questionNumber: number = 4;
  question: Question = {  //FIXME: load question
    id: null,
    quizId: null,
    type: QuestionType.OPTION,
    text: "Question text",
    active: true
  };
  image: string = "image";

  componentRef: ComponentRef<AnswerComponent>


  constructor(private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    // let state = this.router.getCurrentNavigation().extras.state;
    // this.questionNumber = state.questionNumber;
  }

  ngAfterViewInit(): void {
    this.loadComponent(QuestionType.OPTION.toString()); //FIXME: load component of given type 
  }

  loadComponent(value: String) {
    var componentFactory: ComponentFactory<GameAnswerComponent>;
    switch (value) {
      case QuestionType.OPTION:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(GameOptionalAnswerComponent);
        break;
      case QuestionType.BOOLEAN:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(GameBooleanAnswerComponent);
        break;
      case QuestionType.ANSWER:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(GameStringAnswerComponent);
        break;
      case QuestionType.SEQUENCE:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(GameSequenceAnswerComponent);
        break;
    }

    this.answerHost.clear();
    this.componentRef = this.answerHost.createComponent(componentFactory);
    this.componentRef.changeDetectorRef.detectChanges();
  }
}
