import { Validators } from '@angular/forms';
import { SequenceAnswerComponent } from './../sequence-answer/sequence-answer.component';
import { StringAnswerComponent } from './../string-answer/string-answer.component';
import { BooleanAnswerComponent } from './../boolean-answer/boolean-answer.component';
import { OptionalAnswerComponent } from './../optional-answer/optional-answer.component';
import { AnswerComponent } from './../answer/answer.component';
import { QuestionService } from './../service/questionService/question.service';
import { Router } from '@angular/router';
import { Question, QuestionType } from './../models/question.model';
import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {
  quizId: number;
  submitted = false;
  send = false;
  questionForm: FormGroup;
  questionTypes = Object.keys(QuestionType);
  componentRef: ComponentRef<AnswerComponent>;

  question: Question = {
    id: null,
    type: QuestionType.OPTION,
    image: null,
    text: '',
    active: true
  };
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) answerHost;
  @ViewChild(AnswerComponent) answerComponent: AnswerComponent;

  constructor(private router: Router,
              public service: QuestionService,
              private formBuilder: FormBuilder,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      text: [this.question.text, [Validators.required, Validators.maxLength(360)]],
      type: [this.question.type],
      questionImage: [this.question.image]
    });
  }

  ngAfterViewInit(): void {
    this.loadComponent(QuestionType.OPTION.toString());
  }

  loadComponent(value: String) {
    let componentFactory;
    switch (value) {
      case QuestionType.OPTION:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(OptionalAnswerComponent);
        break;
      case QuestionType.BOOLEAN:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(BooleanAnswerComponent);
        break;
      case QuestionType.ANSWER:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(StringAnswerComponent);
        break;
      case QuestionType.SEQUENCE:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(SequenceAnswerComponent);
        break;
    }

    this.answerHost.clear();
    this.componentRef = this.answerHost.createComponent(componentFactory);
    this.componentRef.changeDetectorRef.detectChanges();
  }

  isValid(): boolean {
    return this.questionForm.valid;
  }

  add() {
    if (this.questionForm.invalid) {
      return;
    }
    if (this.componentRef.instance.isValid()) {
      const answer: Answer[] = this.componentRef.instance.getResult();
      this.save(answer);
    }
  }

  onOptionSelected(value: String) {
    this.loadComponent(value);
  }

  save(answer: Answer[]) {
    // TODO: add service to send question
  }

}
