import { Component } from '@angular/core';
// import {  } from '../../assets/images/';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-2.jpg',
      demlolition: 'Building Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'we are professional demolition & Dismantaling contractor we have many years of experience all over india under take demolition project of building & provide safe and trusted service from Mirza Demolition.',
      secondparagraph:
        'These machines look like mini-excavators, but without cabs. They run on tracks and have hydraulically powered arms to which breakers, crushers, drills, or loader buckets can be attached. Many are small enough to fit onto passenger elevators, pass through standard doorways, and even travel up and down stairs. Under their hoods, though, they have electric motors driving their hydraulic systems. And they deliver an exceptional amount of breaking power for such modest-sized equipment. Operators control the robots’ actions remotely, using conventional joystick consoles that they carry or strap to their bodies',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
