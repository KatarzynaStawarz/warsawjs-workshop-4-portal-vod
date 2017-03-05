import {Component, OnInit, Input} from '@angular/core';

function Timeout(time = 1000) {
  return function (target, key, descriptor) {
    //target=instance
    //key = 'test'
    //descriptor = enumarable, configurable, writable, value
    let old = descriptor.value;
    descriptor.value = function() {
      setTimeout(() => {
        old();
      }, time);
    }
  }
}

function  Print(){
  return function(target,key,descriptor){
    let name = descriptor.value();
    descriptor.value = function() {
      console.log(name);
    }
  }
}

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  @Input() video: any;


  constructor() {
    //this.test();
    this.getName();
  }

  ngOnInit() {
  }
  @Print()
  getName(){
    return "Kasia";
  }
  // @Timeout(2000)
  // test() {
  //   console.log('test');
  // }
}
