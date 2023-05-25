import { Component } from '@angular/core';

@Component({
  selector: 'app-mass-excavation',
  templateUrl: './mass-excavation.component.html',
  styleUrls: ['./mass-excavation.component.scss'],
})
export class MassExcavationComponent {
  images: any = [
    {
      navimg: '../../assets/images/image-2.jpg',
      demlolition: 'Mass Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'Mirza Demolition is your trusted partner for all your mass excavation needs, from site preparation to foundation work.Our team of experts has the experience and equipment needed to handle even the largest and most complex mass excavation projects, including those involving contaminated or difficult soil conditions.',
      secondparagraph:
        'We prioritize safety and environmental responsibility in all our mass excavation projects, and we take every precaution to protect workers, the public, and the environment. At Mirza Demolition, we offer a wide range of mass excavation services, including grading, trenching, and backfilling, as well as excavation for foundations, basements, and underground utilities.Whether you are a developer, builder, or homeowner, we can provide the mass excavation services you need to get your project off the ground, on time, and within budget.',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
}
