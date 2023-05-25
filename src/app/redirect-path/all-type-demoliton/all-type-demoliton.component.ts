import { Component } from '@angular/core';

@Component({
  selector: 'app-all-type-demoliton',
  templateUrl: './all-type-demoliton.component.html',
  styleUrls: ['./all-type-demoliton.component.scss'],
})
export class AllTypeDemolitonComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-2.jpg',
      demlolition: 'ALL-TYPE Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'At our company, we offer all types of demolition services to meet your needs, from residential to commercial and industrial properties.Our team of experts has the knowledge and experience to handle all types of demolition projects, no matter the size or complexity.',
      secondparagraph:
        'Whether you need selective demolition, structural demolition, or complete building demolition, we have the skills and equipment to get the job done right.We take pride in offering safe, efficient, and affordable all-type demolition services to our clients, and we always strive to exceed their expectations.Whether you are looking to demolish a small shed or a massive industrial structure, we have the skills and experience to get the job done right, on time, and within your budget.',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
