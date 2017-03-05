import {Component, OnInit} from '@angular/core';
import {LatestVideoService} from "./latest-video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class VideoListComponent implements OnInit {
  private videos: any[] = [];

  constructor(private latestVideoService: LatestVideoService) {
  }

  ngOnInit() {
    this.latestVideoService.getVideos()
      .then((VIDEOS) => {
        this.videos = VIDEOS;
      })
  }

}
