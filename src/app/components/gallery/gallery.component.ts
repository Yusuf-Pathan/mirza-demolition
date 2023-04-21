import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
   images: any = [
    {
      Img: 'https://www.shutterstock.com/image-vector/shops-stores-exteriors-laundry-restaurant-260nw-1927034612.jpg',
    },
    {
      Img: 'https://www.shutterstock.com/image-vector/shops-stores-exteriors-laundry-restaurant-260nw-1927034612.jpg',
    },
    {
      Img: 'https://www.shutterstock.com/image-vector/shops-stores-exteriors-laundry-restaurant-260nw-1927034612.jpg',
    },
  ];

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }
//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     margin: 10,
//     navSpeed: 700,
//     navText: ['Previous', 'Next'],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true
//  }
}
