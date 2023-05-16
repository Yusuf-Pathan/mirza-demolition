import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { end, start } from '@popperjs/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
// import "../../../assets/images/surat.png"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loader = true;
  ngOnInit(): void {
    this.ProjectCount1;
    this.ProjectCount2;
    this.ProjectCount3;
    this.ProjectCount4;

    AOS.init({ disable: 'mobile' });
    AOS.refresh();

    setTimeout(() => {
      this.loader = false;
    }, 1000);

    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);

    if (this.panelOpenState == true) {
      console.log('HELLO');
    }
  }
  //  albumId?: number;
  // id?: number;
  // title?: string;
  // url?: string;
  // thumbnailUrl?: string;
  name = 'Angular ' + VERSION.major;
  categories: any = [
    {
      paragraphdesign:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons3.png',
      logoimgyellow:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons2.png',
      logoimgblack:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons1.png',
      title: 'CONSTRUCTION BUSINESS',
      id: 1,
      subTitle1: 'Our Service Is Best ',
      subTitle2: 'In All Over India',
      paragraph:
        'We provide A valuable & affordable & reliable service from our India head since 30+ years',
    },
  ];

  images = [
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/h1-2.jpg',
    },
    {
      path: 'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/h1-1.jpg',
    },
  ];
  // second start
  pictures: any = [
    {
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/about/style1/about.png',
    },
  ];
  //second end
  // third start
  demolitioncard: any = [
     {
      firstsent: 'Genral Construction', 
      back1: 'https://devsdesign.net/products/html/konstruk/assets/images/services/main-home/main-img/servic-1.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn:'Read More',
      img3: 'https://img.freepik.com/free-icon/demolition_318-405862.jpg?t=st=1682597462~exp=1682598062~hmac=cf583bbcf3b62192fa0d236497b7ee74af57bfd0b60fd3d2871be7eca30db2e7',
     },
     {
      firstsent: 'Property Maintenanse', 
      back1: 'https://devsdesign.net/products/html/konstruk/assets/images/services/main-home/main-img/servic-2.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn:'Read More',
      img3: 'https://img.freepik.com/free-icon/head_318-371228.jpg?t=st=1682594625~exp=1682595225~hmac=0d10bc2d48e7084e0b1a2a99633e322c2c06748aaeec6062257ce9e580022fdc',
     },
     {
      firstsent: 'Project Manajment', 
      back1: 'https://devsdesign.net/products/html/konstruk/assets/images/services/main-home/main-img/servic-3.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn:'Read More',
      img3: 'https://img.freepik.com/free-icon/cogwheel_318-503450.jpg?t=st=1682594421~exp=1682595021~hmac=55f2db6e4c29f7fe7687b4390eea80200c451017161b76136054e2220cf72364',
     },
     {
      firstsent: 'Virtual Design & Build', 
      back1: 'https://devsdesign.net/products/html/konstruk/assets/images/services/main-home/main-img/servic-4.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn:'Read More',
      img3: 'https://img.freepik.com/free-icon/file_318-443752.jpg?t=st=1682594806~exp=1682595406~hmac=dce59a6fbd592f86bf25b86e10a24011149a82eb92a7906f66d6d88be2410dd5',
     },
     {
      firstsent: 'Preconstruction', 
      back1: 'https://devsdesign.net/products/html/konstruk/assets/images/services/main-home/main-img/servic-5.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn:'Read More',
      img3: 'https://img.freepik.com/free-icon/payment-method_318-529437.jpg?t=st=1682596724~exp=1682597324~hmac=dc2fcba4cfe116d76fe75f17519a5131ed9779f023cbcf459453461e4e5d4e20',
     },
     {
      firstsent: 'Design & Build', 
      back1: 'https://devsdesign.net/products/html/konstruk/assets/images/services/main-home/main-img/servic-6.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn:'Read More',
      img3: 'https://img.freepik.com/free-icon/stats_318-174084.jpg?t=st=1682597025~exp=1682597625~hmac=69510aee9dae56f1e03149dfcddfc5aadc7929a454967d135467d51810624af4',
     },
  ]
  // third end ///
  // fourth start //
  countdown: any = [
    {
      subimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      subtext: ' NUMBER TALKS',
      title: ' Konstruk will help you get things complete reality.',
      paragraph: 'Konstruk will help you get things complete reality.',
      btn: 'CONTACT NOW',
    },
  ];
  // counter start
  ProjectCount1: number = 0;
  ProjectCount2: number = 0;
  ProjectCount3: number = 0;
  ProjectCount4: number = 0;

  ProjectCountstop: any = setInterval(() => {
    this.ProjectCount1++;

    if (this.ProjectCount1 == 312) {
      clearInterval(this.ProjectCountstop);
    }
  }, 10);

  ProjectCountstop2: any = setInterval(() => {
    this.ProjectCount2++;
    if (this.ProjectCount2 == 302) {
      clearInterval(this.ProjectCountstop2);
    }
  }, 10);

  ProjectCountstop3: any = setInterval(() => {
    this.ProjectCount3++;
    if (this.ProjectCount3 == 153) {
      clearInterval(this.ProjectCountstop3);
    }
  }, 10);

  ProjectCountstop4: any = setInterval(() => {
    this.ProjectCount4++;
    if (this.ProjectCount4 == 32) {
      clearInterval(this.ProjectCountstop4);
    }
  }, 100);
  // counter end*********
  // fourth end //
  // fifth start
  panelOpenState = false;

  benefits: any = [
    {
      subimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      subtext: ' YOUR BENEFIT',
      title: ' Build better futures with steady focus on quality',
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/choose/benefit/tabs-images.png',
      matpaneltitle1: 'We are a global family  that values diversity',
      matpaneltitle2: 'We on and shape our future',
      matpaneltitle3: 'We create sustainable growth',
      matparagraph:
        ' Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally cumstances occur in which toil and pain can procuresteadysteady.',
    },
  ];

  // fifth-end **********
  // sixth start

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
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/project/style1/1.jpg',
      projectstitle: 'Blue Glass Building',
      projectstag: 'Architecture',
    },
    {
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/project/style1/2.jpg',
      projectstitle: 'Ferguson Family YMCA',
      projectstag: 'Architecture',
    },
    {
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/project/style1/3.jpg',
      projectstitle: 'Stone Harbor',
      projectstag: 'House & Exterior',
    },
    {
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/project/style1/4.jpg',
      projectstitle: 'Hyatt Regency',
      projectstag: 'House & Exterior',
    },
    {
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/project/style1/5.jpg',
      projectstitle: 'Eisenhower Elementary',
      projectstag: 'Interiors',
    },
    {
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/project/style1/6.jpg',
      projectstitle: 'Edison Middle School',
      projectstag: 'Interiors',
    },
  ];
  // sixth end*********
  // seventh-start
  choose: any = [
    {
      subimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      subtext: 'WHY CHOOSE US',
      title: 'Why you should choose our konstruk platform.',
      img: 'https://devsdesign.net/products/html/konstruk/assets/images/choose/benefit/tabs-images.png',
      paragraph:
        'Nor is there anyone who loves or pursues or desires to obtain pain of the itself, because it is pain, but occasionally cumstances.',
      working: 'Working skill',
      clintrating: 'Client rating',
      workpercentage: '95%',
      footstrap: '5.00 Average Based On 50 Rating',
      span: 'More information',
    },
  ];
  service: any = [
    {
      serialnumber: '1',
      servicestext: 'Best sustainability',
    },
    {
      serialnumber: '2',
      servicestext: 'Health and safety',
    },
    {
      serialnumber: '3',
      servicestext: 'Modern methods',
    },
    {
      serialnumber: '4',
      servicestext: 'Certified engineer',
    },
  ];
  // seventh-start-end
  // eight-start
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

  // eight-start-end
  // nineth-start-end
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    LastName: new FormControl(''),
    Emails: new FormControl(''),
    Company: new FormControl(''),
    request: new FormControl(''),
  });
  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.reset();
    alert('data submitted');
  }
  // nineth-start-end
  // contact-start-
  conatct: any = [
    {
      describe:
        ' Describe your product idea and we will start working on it within 24 hours.',
      contact: 'Contact us',
    },
  ];
  // end
  // tenth-start
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
  // tenth-end
  //  eleventh-start
  action: any = [
    {
      logoimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      logoname: 'WORK WITH US !',
      paragraph: 'Have any upcoming project',
      content:
        'WreckHouse Demolition, a family-owned business with over 30 years of industry experience, is the place to start when commercial, residential, industrial or public work demolition projects are needed.',
      btn: 'GET STARTED',
      //
    },
  ];
  //  eleventh-start-end
  //  12-start
  footer: any = [
    {
      logoimg: '../../../assets/images/surat.png',
      timing: 'Sunday - Monday: 24 Hours Available',
      timing2: 'Opening Hours:',
      content:
        'we are professional demolition & Dismantaling contractor we have many years of experience all over india under take demolition project of building & provide safe and trusted service from Mirza Demolition.',
      //
      contactinfo: 'CONTACT INFO',
      contactadd: 'Near Ruderpura Main Road Navsari bazar,surat',
      contactnumber: '9714589292',
      contactnumber2: '06384452903',
      contactmail: 'Noor.Mirza9292@gmail.com',
      contactmail2: 'infoname@gmail.com',
      //
      newsletter: 'NEWSLETTER',
      newsletter2: 'it was a pleasure speaking with you.',
      newsletter3: 'SUBSCRIBE NOW',
      //
      right: '© 2023 design by Eternity',
      li1: 'Home',
      li2: 'About',
      li3: 'Serviced',
      li4: 'Pages',
      li5: 'Blog',
      li6: 'Contact',
    },
  ];

  treeData = [
    {
      name: 'Parent 1',
      children: [{ name: 'Child 1' }, { name: 'Child 2' }],
    },
    {
      name: 'Parent 2',
      children: [{ name: 'Child 3' }, { name: 'Child 4' }],
    },
  ];

  //  13-start
  // 14 start

  @ViewChild('scroll') scroll!: ElementRef;
  @ViewChild('myContainer')
  myContainer!: ElementRef;
  scrolltop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToBottom() {
    this.myContainer.nativeElement.scrollTop =
      this.myContainer.nativeElement.scrollHeight;
  }
}
