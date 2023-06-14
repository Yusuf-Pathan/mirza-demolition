import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  categories: any = [
    {
      paragraphDesign:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons3.png',
      paragraphDesignx:
        '../../../assets/images/dote-image.png',
      landingVideo: '../../../assets/Videos/construction-image.mp4',
      downArrowLogo:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons2.png',
      upArrowLogo:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons1.png',
      title: 'Mirza Demolition',
      subTitle1: 'Our Service Is Best ',
      subTitle2: 'In All Over India',
      paragraph:
      'We provide A valuable & affordable & reliable service from our India head since 30+ years',
      id: 1,
    },
  ];

  handleClickedEvent(): void {
    debugger;
  }
}
