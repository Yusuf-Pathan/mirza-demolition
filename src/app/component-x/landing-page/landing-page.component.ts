

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  name = 'Angular ' + VERSION.major;
  categories: any = [
    {
      paragraphDesign:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons3.png',
      landingVideo: '../../../assets/Videos/construction-image.mp4',
      downArrowLogo:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons2.png',
      upArrowLogo:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons1.png',
      title: 'Demolition BUSINESS',
      id: 1,
      subTitle1: 'Our Service Is Best ',
      subTitle2: 'In All Over India',
      paragraph:
        'We provide A valuable & affordable & reliable service from our India head since 30+ years',
    },
  ];
  images = [
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/h1-2.jpg',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/h1-1.jpg',
    },
  ];
}
