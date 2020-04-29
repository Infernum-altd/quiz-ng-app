import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../models/quiz";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input()
  quizData: Quiz;
  quizImage : SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.quizImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.quizData.image);
  }
}
