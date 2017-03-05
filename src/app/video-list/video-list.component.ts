import {Component, OnInit, Input} from '@angular/core';
import {SortingService} from "./sorting.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [
    SortingService
  ]
})
export class VideoListComponent implements OnInit {
  @Input() videos: any[];

  constructor(private sortingService: SortingService) {
  }

  ngOnInit() {

  }
  sortAscending(){
    this.videos = this.videos.sort(this.sortingService.ascending)
  }

  sortDescending(){
    this.videos = this.videos.sort(this.sortingService.descending)
  }

}
