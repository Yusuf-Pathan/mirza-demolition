import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-articals',
  templateUrl: './our-articals.component.html',
  styleUrls: ['./our-articals.component.scss'],
})
export class OurArticalsComponent {
  customOptionse: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  blogs: any = [
    {
      logoimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      logoname: 'NEWS & BLOG',
      paragraph: 'Our latest news post and articles?',
      //
    },
  ];
  cards: any = [
    {
      cardimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/blog/style1/2.jpg',
      date: '26 april 2022',
      tagname: 'Admin',
      cardparagraph: 'Best practices construction law on construction',
      cardbutton: 'read more',
    },
  ];
}
