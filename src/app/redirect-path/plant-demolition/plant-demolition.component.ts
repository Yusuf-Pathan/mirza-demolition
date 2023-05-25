import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-demolition',
  templateUrl: './plant-demolition.component.html',
  styleUrls: ['./plant-demolition.component.scss'],
})
export class PlantDemolitionComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-2.jpg',
      demlolition: 'Plant Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'Plant demolition is a complex and specialized service that requires expertise, experience, and advanced equipment. At our company, we have all of these things and more.Our team of professionals specializes in plant demolition, and we have the skills and knowledge to handle even the most challenging projects.Whether you need to demolish a small manufacturing plant or a massive industrial facility, we have the equipment and expertise to get the job done safely and efficiently.',
      secondparagraph:
        'At our company, we prioritize safety above all else when it comes to plant demolition. We take every precaution to protect our workers, the public, and the environment.We understand that plant demolition can be a daunting task, but with our expert team on your side, you can trust that the job will be done right, on time, and within your budget .Our plant demolition services include everything from site preparation and permits to debris removal and recycling, so you can trust us to handle every aspect of your project with professionalism and care.',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
