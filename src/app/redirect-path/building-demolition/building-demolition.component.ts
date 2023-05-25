import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-demolition',
  templateUrl: './building-demolition.component.html',
  styleUrls: ['./building-demolition.component.scss']
})
export class BuildingDemolitionComponent implements OnInit {

  constructor() { }
  images: any = [
    {
      navimg: '../../assets/images/image-4.jpg',
      demlolition: 'Building Demolition',
      services: 'services',
      page: 'pages',
      contenttitle: 'OUR SERVICES',
      firstparagraph:
        'When it comes to building demolition, safety and efficiency are paramount to ensure that the job is done right.Our team of experts specializes in building demolition, and we have the knowledge and experience to handle even the most complex projects',
      secondparagraph:
        'From start to finish, we take care of everything when it comes to building demolition, including site preparation, permits, and debris removal',
      contentimage:
        'http://www.avanceinfratech.com/images/service-robotic-demolition.jpg',
    },
  ];
  ngOnInit() {
  }

}
