import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  pictures: any = [
    {
      img: '../../../assets/images/image-4.jpg',
    },
  ];
  categories: any = [
    {
      paragraphdesign:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons3.png',
    },
  ];
}
