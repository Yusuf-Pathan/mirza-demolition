import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  videos: any = [
    {
      videoURL: '../assets/videos/house_down.mp4',
    },
    {
      videoURL: '../assets/videos/video-0.mp4',
    },
  ];
}
