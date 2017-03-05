import {Injectable} from '@angular/core';
import {VIDEOS} from './mock-videos';


@Injectable()
export class LatestVideoService {

  constructor() {
  }

  getVideos(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(VIDEOS);
      }, 1000);
    })
  }

  getVideo(id:string) {
    return this.getVideos()
      .then((videos) => {
        return videos.filter(function(x){
          return x.id == id;
        })[0];
      })
  }
}
