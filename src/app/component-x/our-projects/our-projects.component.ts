import { Component } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent {
  projects: any = [
    {
      subimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      subtext: 'projects',
      title: 'Latest completed projects',
    },
  ];
  mprojects: any = [
    {
      img: '../../../assets/images/image-3.jpg',
      projectstitle: 'Blue Glass Building',
      projectstag: 'Architecture',
    },
    {
      img: '../../../assets/images/image-3.jpg',
      projectstitle: 'Ferguson Family YMCA',
      projectstag: 'Architecture',
    },
    {
      img: '../../../assets/images/image-3.jpg',
      projectstitle: 'Stone Harbor',
      projectstag: 'House & Exterior',
    },
    {
      img: '../../../assets/images/image-3.jpg',
      projectstitle: 'Hyatt Regency',
      projectstag: 'House & Exterior',
    },
    {
      img: '../../../assets/images/image-3.jpg',
      projectstitle: 'Eisenhower Elementary',
      projectstag: 'Interiors',
    },
    {
      img: '../../../assets/images/image-3.jpg',
      projectstitle: 'Edison Middle School',
      projectstag: 'Interiors',
    },
  ];
}
