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
  submitted: boolean = false;
  send: boolean = false;
  questionForm: FormGroup;
  questionTypes = Object.keys(QuestionType)
  componentRef: ComponentRef<AnswerComponent>

  question: Question = {
    id: null,
    quizId: null,
    type: QuestionType.OPTION,
    text: "",
    active: true
  };
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) answerHost;
  @ViewChild(AnswerComponent) answerComponent: AnswerComponent;

  constructor(private router: Router,
    public questionService: QuestionService,
    private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      text: [this.question.text, [Validators.required, Validators.maxLength(360)]],
      type: [this.question.type]
      // , questionImage: [this.question.image]
    });
  }

  ngAfterViewInit(): void {
    this.loadComponent(QuestionType.OPTION.toString());
  }

  loadComponent(value: String) {
    var componentFactory
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
    return this.questionForm.valid
  }

  save() {
    if (this.questionForm.invalid) {
      return;
    }

    this.submitted = true;
    let answer = this.componentRef.instance;
    if (answer.isValid()) {
      this.question.quizId = this.quizId;
      this.question.type = this.question.type.toUpperCase();
      this.question.text = this.questionForm.get('text').value;
      this.question.type = this.questionForm.get('type').value.toUpperCase();

      console.log(this.question);

      this.questionService.postQuestion(this.question)
        .subscribe(
          res => {
            console.log('Question added');
            this.question.id = res.id;
            answer.questionId = this.question.id;

            if (answer.isValid()) {
              answer.save();

              if (answer.submitted && answer.send) {
                this.send = true;
              }
            }
          },
          err => {
            alert(err.error['message']);
          }
        );
    }
  }

  onOptionSelected(value: String) {
    this.loadComponent(value);
  }

}
