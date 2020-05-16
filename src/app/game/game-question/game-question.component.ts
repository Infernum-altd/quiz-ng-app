import { share, map, mergeMap } from 'rxjs/operators';
import { GameService } from './../../service/gameService/game.service';
import { Observable } from 'rxjs';
import { GameStringAnswerComponent } from './../game-string-answer/game-string-answer.component';
import { GameBooleanAnswerComponent } from './../game-boolean-answer/game-boolean-answer.component';
import { GameOptionalAnswerComponent } from './../game-optional-answer/game-optional-answer.component';
import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question, QuestionType } from 'src/app/models/question.model';
import { GameSequenceAnswerComponent } from '../game-sequence-answer/game-sequence-answer.component';
import { Answer } from 'src/app/models/answer.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.css']
})
export class GameQuestionComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) answerHost;
  @ViewChild(GameAnswerComponent) answerComponent: GameAnswerComponent;

  gameId: number;
  questionTimer: number;

  shared: Observable<any> = null;
  question: Observable<Question> = null;
  questionNumber: Observable<number> = null;
  answers: Observable<Answer[]> = null;

  image: string = null;

  componentRef: ComponentRef<GameAnswerComponent>;


  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private gameService: GameService) { }

  ngOnInit(): void { }

  getShared(): Observable<string> {
    if (this.shared != null) {
      return this.shared;
    }
    return this.shared = this.route.params.pipe(
      map(params => {
        this.gameId = +params['gameId'];
        let isStart: number = parseInt(history.state.isStart, 10);

        if (isStart === 1) {
          this.gameService.startGame(this.gameId);
        }
      }
      ),
      mergeMap(
        _ => this.gameService.getQuestion().pipe(
          map(resp => {
            let questionData = JSON.parse(resp);
            this.questionTimer = questionData['questionTimer'];
            this.getAnswers();
            this.loadComponent(questionData['question'].type);
            this.startTimer();
            return questionData;
          })
        )
      ),
      share()
    );
  }

  getAnswers(): Observable<Answer[]> {
    if (this.answers != null) {
      return this.answers;
    }
    return this.answers = this.getShared().pipe(
      map(
        resp => {
          return resp['question']['answerList'];
        }
      ));
  }

  getQuestion(): Observable<Question> {
    if (this.question != null) {
      return this.question;
    }
    return this.question = this.shared.pipe(
      map(
        resp => {
          return resp['question'];
        }
      ));
  }

  getQuestionNumber(): Observable<number> {
    if (this.questionNumber != null) {
      return this.questionNumber;
    }
    return this.questionNumber = this.getShared().pipe(
      map(
        resp => {
          return resp['questionNumber'];
        }
      ));
  }

  loadComponent(value: string) {
    let titleCasePipe = new TitleCasePipe();
    value = titleCasePipe.transform(value);
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
    this.componentRef.instance.answers = this.getAnswers();
    this.componentRef.changeDetectorRef.detectChanges();
  }

  interval: NodeJS.Timeout;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.questionTimer > 0) {
        this.questionTimer--
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  nextQuestion() {
    //TODO:
  }
}
