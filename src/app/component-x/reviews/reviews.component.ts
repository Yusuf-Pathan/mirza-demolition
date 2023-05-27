import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { bounce, fadeOutTopLeft } from 'ng-animate';
import * as AOS from 'aos';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  limit: number = 10;
  divbox: any;
  getData(e: any) {
    //alert(e.target);
    this.divbox = !this.divbox;
    return this.setData(e);
  }
  setData(_e: any) {}
  customOptions: OwlOptions = {
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

  slider: any = [
    {
      item: 'https://devsdesign.net/products/html/konstruk/assets/images/testimonial/style1/quote.png',
      paragraph:
        'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
      paraimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/testimonial/style1/testi2.jpg',
      imgname: 'Angel Puspa',
      tagnmae: 'CEO, Brick Consulting',
      logoimg1:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      logoname1: 'TESTIMONIALS',
      logoname2: 'TEAM MEMBERS',
      review1: 'Our clients reviews.',
      review2: 'Expert team members.',
    },
    //  {
    //   item:'https://devsdesign.net/products/html/konstruk/assets/images/testimonial/style1/quote.png',
    //   paragraph:'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    //   paraimg:'https://devsdesign.net/products/html/konstruk/assets/images/testimonial/style1/testi2.jpg',
    //   imgname:'Angel Puspa',
    //   tagnmae: 'CEO, Brick Consulting',
    //   logoimg1:'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
    //   logoname1:'TESTIMONIALS',
    //   logoname2:'TEAM MEMBERS',
    //   review1:'Our clients reviews.',
    //   review2:'Expert team members.'
    //  }
  ];
  slider2: any = [
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/team/tm1.jpg',
      secondcarousel2:
        'https://devsdesign.net/products/html/konstruk/assets/images/team/tm3.jpg',
      secondcarousel3:
        'https://devsdesign.net/products/html/konstruk/assets/images/team/tm3.jpg',
    },
  ];
  slider3: any = [
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      secondcarousel1:
        'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
  ];
  current = 0;
  img_list = [
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/2.png',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/3.png',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/5.png',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/6.png',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/partner/style1/1.png',
    },
  ];
}
