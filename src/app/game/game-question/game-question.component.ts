import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { Question, QuestionType } from 'src/app/models/question.model';
import { AnswerComponent } from 'src/app/answer/answer.component';

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.css']
})
export class GameQuestionComponent implements OnInit, AfterViewInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) answerHost;


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
    this.loadComponent(QuestionType.OPTION.toString());
  }

  loadComponent(value: String) {
    // var componentFactory: ComponentFactory<AnswerComponent>;
    // switch (value) {
    //   case QuestionType.OPTION:
    //     componentFactory = this.componentFactoryResolver.resolveComponentFactory(OptionalAnswerComponent);
    //     break;
    //   case QuestionType.BOOLEAN:
    //     componentFactory = this.componentFactoryResolver.resolveComponentFactory(BooleanAnswerComponent);
    //     break;
    //   case QuestionType.ANSWER:
    //     componentFactory = this.componentFactoryResolver.resolveComponentFactory(StringAnswerComponent);
    //     break;
    //   case QuestionType.SEQUENCE:
    //     componentFactory = this.componentFactoryResolver.resolveComponentFactory(SequenceAnswerComponent);
    //     break;
    // }

    // this.answerHost.clear();
    // this.componentRef = this.answerHost.createComponent(componentFactory);
    // this.componentRef.changeDetectorRef.detectChanges();
  }
}
