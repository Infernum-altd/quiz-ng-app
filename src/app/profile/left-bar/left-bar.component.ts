import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  selectedFile: File;
  constructor() { }

  ngOnInit(): void {
  }

  //TODO::upload image and change it
  changeImg(event) {
    this.selectedFile = event.target.files[0];
  }
}
