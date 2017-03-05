import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoListComponent} from "../video-list/video-list.component";
import {VideoComponent} from "../video/video.component";
import {VideoNotFoundComponent} from "../video-not-found/video-not-found.component";
import {SearchComponent} from "../search/search.component";
import {LatestVideoListComponent} from "../latest-video-list/latest-video-list.component";

const routes: Routes = [
  {path: '', component: LatestVideoListComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'video-not-found', component: VideoNotFoundComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
