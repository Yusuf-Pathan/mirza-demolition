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
      description: `Leverage agile frameworks to provide a robust synopsis for high level
      overviews. Iterative approaches to corporate strategy data foster to
      collaborative thinking to empowerment.`,
      image: "https://devsdesign.net/products/html/konstruk/assets/images/about/style1/abzt.jpg",
      listOptionOne: "Pre-construction services",
      listOptionTwo: "Industrial manufacturing",
      listOptionThree: "Building and construction",
    },
  ];
}
