import { Component } from '@angular/core';

@Component({
  selector: 'app-high-rise-building',
  templateUrl: './high-rise-building.component.html',
  styleUrls: ['./high-rise-building.component.scss'],
})
export class HighRiseBuildingComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-3.jpg',
      demlolition: 'High-rise-building Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph: 'High-rise building demolition is a complex and highly specialized service that requires advanced knowledge, experience, and equipment. At our company, we have all of these things and more.Our team of experts specializes in high-rise building demolition, and we have the skills and knowledge to handle even the most challenging projects.',
      secondparagraph:
        'When it comes to high-rise building demolition, safety is our top priority. We take every precaution to protect our workers, the public, and the environment.We understand that high-rise building demolition can be a daunting task, but with our expert team on your side, you can trust that the job will be done right, on time, and within your budget.Our high-rise building demolition services include everything from site preparation and permits to debris removal and recycling, so you can trust us to handle every aspect of your project with professionalism and care.',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
