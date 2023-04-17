import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { bounce, fadeOutTopLeft } from 'ng-animate';
import * as AOS from 'aos';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('activeSlide', [
      state(
        'active',
        style({
          animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          transform: 'scale3d(1.3, 1.3, 1.3)',
          opacity: 1,
        })
      ),
      state(
        'inActive',
        style({
          transform: 'scale3d(0.8, 0.8, 0.8)',
          opacity: 0.8,
        })
      ),
      transition('active => inActive', [animate('0.8s')]),
      transition('inActive => active', [animate('0.8s')]),
    ]),
  ],
})
export class CategoryComponent implements OnInit {
  customOptions: OwlOptions = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    items: 4,
    navSpeed: 700,
    // autoplayTimeout: 2500,
    // mouseDrag: true,
    // touchDrag: true,
    // autoWidth: true,
    center: true,
    loop: false,
    nav: false,
    autoplay: false,
    navText: ['', ''],
    slideTransition: 'linear',
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    autoHeight: true,
    dots: false,
    margin: 20,
    stagePadding: 20,
  };
  categories: any = [
    {
      img: 'https://img.freepik.com/premium-photo/yellow-hard-hat-construction-site_104033-47.jpg',
      title: 'Building Construction Service',
      id: 1,
      subTitle:
        'The Shiba Inu is the smallest of the six original and distinct spit breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain,',
      isCentered: true,
    },
    {
      img: 'https://img.freepik.com/premium-photo/yellow-hard-hat-construction-site_104033-47.jpg',
      title: 'Building Construction Service',
      id: 2,
      subTitle: 'Building Construction Service',
      isCentered: false,
    },
    {
      img: 'https://img.freepik.com/premium-photo/yellow-hard-hat-construction-site_104033-47.jpg',
      title: 'Building Construction Service',
      id: 3,
      subTitle: 'Building Construction Service',
      isCentered: false,
    },
    {
      img: 'https://img.freepik.com/premium-photo/yellow-hard-hat-construction-site_104033-47.jpg',
      title: 'Building Construction Service',
      id: 4,
      subTitle: 'Building Construction Service',
      isCentered: false,
    },
    {
      img: 'https://img.freepik.com/premium-photo/yellow-hard-hat-construction-site_104033-47.jpg',
      title: 'Building Construction Service',
      id: 5,
      subTitle: 'Building Construction Service',
      isCentered: false,
    },
    {
      img: 'https://img.freepik.com/premium-photo/yellow-hard-hat-construction-site_104033-47.jpg',
      title: 'Building Construction Service',
      id: 6,
      subTitle: 'Building Construction Service',
      isCentered: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' }); //AOS - 2
    AOS.refresh();
  }
}
