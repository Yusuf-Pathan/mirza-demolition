import { Component } from '@angular/core';

@Component({
  selector: 'app-special-demoliton',
  templateUrl: './special-demoliton.component.html',
  styleUrls: ['./special-demoliton.component.scss']
})
export class SpecialDemolitonComponent {
  images: any = [
    {
      navimg:
      '../../assets/images/image-2.jpg',
      demlolition: 'SPEACIAL Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'Special demolition is a highly specialized service that requires advanced knowledge and expertise to ensure that the job is done safely and efficiently. Our company specializes in special demolition services, and we have the skills and experience to handle even the most complex projects',
      secondparagraph:
        'From industrial sites to commercial buildings, we offer a wide range of special demolition services to meet your needs .These machines look like mini-excavators, but without cabs. They run on tracks and have hydraulically powered arms to which breakers, crushers, drills, or loader buckets can be attached. Many are small enough to fit onto passenger elevators, pass through standard doorways, and even travel up and down stairs. Under their hoods, though, they have electric motors driving their hydraulic systems. And they deliver an exceptional amount of breaking power for such modest-sized equipment. Operators control the robots’ actions remotely, using conventional joystick consoles that they carry or strap to their bodies',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
