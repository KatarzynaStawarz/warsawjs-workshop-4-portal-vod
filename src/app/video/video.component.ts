import {Component, OnInit} from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";
import 'rxjs/add/operator/switchMap'
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [LatestVideoService]
})
export class VideoComponent implements OnInit {
  video: any;

  constructor(private latestVideoService: LatestVideoService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
      return this.latestVideoService.getVideo(params['id']);
    })
      .subscribe(video => {
        // if (!video){
        //   return this.router.navigate([])
        // }
        this.video = video;
      });
    // this.latestVideoService.getVideos()
    //   .then((videos) => {
    //     this.video = videos[0];
    //   })
  }

}
