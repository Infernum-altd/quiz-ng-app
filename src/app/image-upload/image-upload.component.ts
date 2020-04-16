import { Component, OnInit } from '@angular/core';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFile: ImageSnippet

  constructor() { }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    })

    reader.readAsDataURL(file);
  }
}