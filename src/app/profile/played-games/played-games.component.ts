import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../models/quiz";
import {Subject} from "rxjs";
import {ProfileService} from "../../service/profileService/profile.service";
import {PageEvent} from "@angular/material/paginator";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {Game} from "../../models/game.model";

@Component({
  selector: 'app-played-games',
  templateUrl: './played-games.component.html',
  styleUrls: ['./played-games.component.css']
})
export class PlayedGamesComponent implements OnInit {
  userQuizzes: Game[];
  displayedColumns: string[] = ['name', 'date'];
  public userRequest: string;
  userQuestionUpdate = new Subject<string>();
  sortDirection = undefined;

  length = 0;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[] = [8, 16, 24];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.setPaginationParamDefault();
    this.getUserGames();

    this.userQuestionUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(userSearch => {
        if (userSearch.length ==0) {
          this.setPaginationParamDefault();
          this.getUserGames();
        } else {
          this.filterGames(userSearch);
        }
      });
  }

  getUserGames() {
    this.profileService.getPlayedGames(this.pageSize, this.pageIndex, this.sortDirection).subscribe(
      resp => {
        this.userQuizzes = resp.responceList;
        this.length = resp.totalNumberOfElement;
      });
  }

  setPaginationParamDefault() {
    this.pageIndex = 0;
    this.pageSize = 8;
  }

  onPageChanged($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.choseRequest();
  }

  filterGames(userSearch: string) {
    this.profileService.filterGamesRequest(userSearch, this.pageSize, this.pageIndex, this.sortDirection).subscribe(
      resp=>{
        this.userQuizzes = resp.responceList;
        this.length = resp.totalNumberOfElement;
      }
    );
  }

  choseRequest() {
    if (this.userRequest != undefined && this.userRequest) {
      if (this.pageSize == undefined) {
        this.setPaginationParamDefault();
      }
      this.filterGames(this.userRequest);
    }else {
      this.getUserGames();
    }
  }

  sortGames($event) {
    this.sortDirection = $event.direction==''? undefined : $event;
    this.setPaginationParamDefault();
    this.choseRequest();
  }

}
