import { Component } from '@angular/core';

@Component({
  selector: 'app-work-categories',
  templateUrl: './work-categories.component.html',
  styleUrls: ['./work-categories.component.scss'],
})
export class WorkCategoriesComponent {
  demolitionCategories: any = [
    {
      demolitionOption: 'Demolition Construction',
      cardImage: '../../../assets/images/image-3.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      logoImage: '../../../assets/images/demolition.avif',
    },
    {
      demolitionOption: 'High Rise Demolition',
      cardImage: '../../../assets/images/image-4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      logoImage: '../../../assets/images/head.avif',
    },
    {
      demolitionOption: 'Project Management',
      cardImage: '../../../assets/images/image-4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      logoImage: '../../../assets/images/cogwheel.avif',
    },
    {
      demolitionOption: 'Earth Moving Service',
      cardImage: '../../../assets/images/image-4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      logoImage: '../../../assets/images/file.avif',
    },
    {
      demolitionOption: 'Removing Debris',
      cardImage: '../../../assets/images/image-4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      logoImage: '../../../assets/images/payment-method_318-529437.avif',
    },
    {
      demolitionOption: 'All types of Demolition',
      cardImage: '../../../assets/images/image-4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      logoImage: '../../../assets/images/stats.avif',
    },
  ];
}
