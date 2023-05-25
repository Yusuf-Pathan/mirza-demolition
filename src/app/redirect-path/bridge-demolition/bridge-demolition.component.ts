import { Component } from '@angular/core';

@Component({
  selector: 'app-bridge-demolition',
  templateUrl: './bridge-demolition.component.html',
  styleUrls: ['./bridge-demolition.component.scss'],
})
export class BridgeDemolitionComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-4.jpg',
      demlolition: 'Bridge Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'Bridge demolition is a complex and highly specialized service that requires advanced knowledge, experience, and equipment. At our company, we have all of these things and more.Our team of experts specializes in bridge demolition, and we have the skills and knowledge to handle even the most challenging projects.',
      secondparagraph:
        'When it comes to bridge demolition, safety is our top priority. We take every precaution to ensure that our customers are safe and comfortable.We take pride in providing high-quality bridge demolition services that exceed our clients expectations, and we are committed to delivering exceptional results on every project. Whether you need to demolish a small pedestrian bridge or a large highway overpass, we have the expertise and equipment to get the job done safely and efficiently.',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
