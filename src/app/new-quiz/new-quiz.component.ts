import { Router } from '@angular/router';
import { NewQuizService } from './../service/newQuizService/new-quiz.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from './../service/categoryService/category.service';
import { Category } from './../models/category.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/add-quiz.model';
import { StatusType } from '../models/quiz.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css']
})
export class NewQuizComponent implements OnInit {
  quizForm: FormGroup;
  submitted: boolean = false;
  categories: Category[];

  tagRef: any;
  tags: String[] = [];


  quiz: Quiz = {
    id: 0,
    name: "",
    author: 2,
    category_id: 1,
    date: new Date().toISOString(),
    description: "",
    status: StatusType.PENDING.toString(),
    modification_time: new Date().toISOString()
  };

  constructor(
    private categoryService: CategoryService,
    private newQuizService: NewQuizService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.loadCategories();

    this.quizForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength]],
      category: ['General'],
      description: ['', [Validators.maxLength]]
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      resp => { this.categories = resp },
      err => console.error(err),
      () => console.log('Done loading categories')
    );
  }

  addTag() {
    if (this.tagRef == "" || this.tagRef == null || this.tags.includes(this.tagRef)) return;
    this.tags.push(this.tagRef);
    this.tagRef = "";
  }

  removeTag(i: number) {
    this.tags.splice(i, 1);
  }

  onSubmit() {
    this.submitted = true;

    if (this.quizForm.invalid) {
      return;
    }

    let input: Quiz = JSON.parse(JSON.stringify(this.quizForm.value));
    this.quiz.name = input.name;
    let category = this.quizForm.get('category').value;
    this.quiz.category_id = this.categories.find(function (el) { return el.name === category; }).id;
    this.quiz.description = input.description;

    this.quiz.status = this.quiz.status.toUpperCase();

    this.saveQuiz();
  }

  saveQuiz(): void {

    this.newQuizService.postQuiz(this.quiz).subscribe(
      res => {
        console.log('Quiz added');
        this.router.navigateByUrl('/add_questions', {
          state: {
            id: res.id,
            name: res.name
          }
        });
      },
      err => {
        alert(err.error['message']);
      }
    );
  }
}
