import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  images: any = [
    {
      navimg:
        'https://images.unsplash.com/photo-1562860434-78365856273d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      demlolition: 'Robotic Demolition',
      services: 'services',
      page: 'pages',
      rd: 'Robotic demolition',
      contenttitle: 'OUR SERVICES',
      subtitle: 'Robotic Demolition',
      firstparagraph:
        'we are professional demolition & Dismantaling contractor we have many years of experience all over india under take demolition project of building & provide safe and trusted service from Mirza Demolition.',
      secondparagraph:
        'These machines look like mini-excavators, but without cabs. They run on tracks and have hydraulically powered arms to which breakers, crushers, drills, or loader buckets can be attached. Many are small enough to fit onto passenger elevators, pass through standard doorways, and even travel up and down stairs. Under their hoods, though, they have electric motors driving their hydraulic systems. And they deliver an exceptional amount of breaking power for such modest-sized equipment. Operators control the robots’ actions remotely, using conventional joystick consoles that they carry or strap to their bodies',
      contentimage:'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg'  
    },
  ];
}
