import { SequenceAnswerComponent } from './../sequence-answer/sequence-answer.component';
import { StringAnswerComponent } from './../string-answer/string-answer.component';
import { BooleanAnswerComponent } from './../boolean-answer/boolean-answer.component';
import { OptionalAnswerComponent } from './../optional-answer/optional-answer.component';
import { AnswerComponent } from './../answer/answer.component';
import { Validators } from '@angular/forms';
import { QuestionService } from './../service/questionService/question.service';
import { Router } from '@angular/router';
import { Question, QuestionType } from './../models/question.model';
import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {
  questionForm: FormGroup;
  submitted = false;
  questionTypes = Object.keys(QuestionType)
  answer: AnswerComponent

  model: Question = {
    id: null,
    type: QuestionType.OPTION,
    image: null,
    text: '',
    active: true
  };
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) answerHost;

  constructor(private router: Router,
    public service: QuestionService,
    private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      text: [''],
      type: [''],
      image: [null]
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
    const componentRef = this.answerHost.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectorChanges();
  }

  isValid(): boolean {
    return this.questionForm.valid
  }

  add() {
    this.submitted = true;

    if (this.questionForm.invalid) {
      return;
    }

    let input: Question = JSON.parse(JSON.stringify(this.questionForm.value));
    //TODO: put data from form to model
    this.save();
  }

  onOptionSelected(value: String) {
    this.loadComponent(value);
  }

  save() {
    //TODO: add service to send question
  }

}
