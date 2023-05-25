import { Component } from '@angular/core';

@Component({
  selector: 'app-shead-demoliton',
  templateUrl: './shead-demoliton.component.html',
  styleUrls: ['./shead-demoliton.component.scss']
})
export class SheadDemolitonComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-2.jpg',
      demlolition: 'SHEAD Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'Shed demolition is an important service for removing old or unsafe structures from your property.',
      secondparagraph:
        'If you have an old or unsafe shed on your property, it is important that you have it removed as soon as possible. Shed demolition is the solution you need.At our company, we provide professional shed demolition services that are safe, efficient, and affordable.Our team of experts specializes in shed demolition, and we have the knowledge and experience to handle any type of demolition',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
