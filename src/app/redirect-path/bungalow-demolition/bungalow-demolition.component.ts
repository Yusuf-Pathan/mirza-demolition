import { Component } from '@angular/core';

@Component({
  selector: 'app-bungalow-demolition',
  templateUrl: './bungalow-demolition.component.html',
  styleUrls: ['./bungalow-demolition.component.scss'],
})
export class BungalowDemolitionComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-2.jpg',
      demlolition: 'Building Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'Mirza Demolition is your go-to partner for safe and efficient bungalow demolition services.Our team of experts has the knowledge and experience to handle all types of bungalow demolition projects, from small residential properties to large-scale commercial developments.',
      secondparagraph:
        'We use state-of-the-art equipment and techniques to ensure that every bungalow demolition project is completed safely, efficiently, and within budget.At Mirza Demolition, we take pride in providing comprehensive bungalow demolition services, from site preparation and permits to debris removal and recycling.We understand that bungalow demolition can be a sensitive and emotional process, especially when it involves a family home. we have the knowledge and experience to handle all types of building demolition projects.',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
