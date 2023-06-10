import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  categories: any = [
    {
      squareDotes:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons3.png',
      whoWeAre: 'Who We Are',
      title: 'Demolition solutions provider',
      description: `All types of RCC Demolition & dismantling Company.
        We provide the best service and the best safety over in our demolition work.`,
      image: "https://www.laborfinders.com/media/ufjptgn2/testfile.jpg?width=738&height=440&rnd=133152766609970000&format=webp&quality=80",
      listOptionOne: "High Rise Demolition Service",
      listOptionTwo: "Earth Moving Demolition Service",
      listOptionThree: "Fabrication Work Service",
    },
  ];
}
