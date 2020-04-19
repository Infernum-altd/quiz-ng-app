import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../service/profileService/profile.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NotificationStatus} from "../../models/notification-status.enum";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('currentUser')).email;
  notificationStatus: NotificationStatus;
  progressImage: any;
  file: SafeResourceUrl;
  constructor(private profileService: ProfileService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.uploadFile();
    this.getNotification();
  }

  fileProgress(imageInput: any){
    this.progressImage = <File>imageInput.target.files[0];
    this.changeImg();
  }

  changeImg() {
    this.profileService.updateImage(this.progressImage).subscribe(
      resp => {
        this.uploadFile();
        alert("Icon was changed")
      },
      error => {
        alert("Error while updating icon")
      }
    )
  }

  uploadFile(){
    this.profileService.getProfileImage().subscribe(
      resp => {
        this.file = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + resp.text);
      },
      error => {
        console.log(error);
      }
    )
  }

  change(){
    this.profileService.updateNotificationStatus(this.notificationStatus).subscribe(
      resp =>{
        alert("Notification status was changed")
      },
      error => {
        alert("Error while change notification status")
      }
    );
  }

  getNotification() {
    this.profileService.getUserNotificationStatus().subscribe(
      resp =>{
        this.notificationStatus = resp;
      }
    );
  }
}
