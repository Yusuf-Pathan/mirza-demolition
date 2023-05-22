import { Component } from '@angular/core';

@Component({
  selector: 'app-work-categories',
  templateUrl: './work-categories.component.html',
  styleUrls: ['./work-categories.component.scss'],
})
export class WorkCategoriesComponent {
  demolitioncard: any = [
    {
      firstsent: 'Genral Construction',
      back1: '../../../assets/images/image-3.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      img3: 'https://img.freepik.com/free-icon/demolition_318-405862.jpg?t=st=1682597462~exp=1682598062~hmac=cf583bbcf3b62192fa0d236497b7ee74af57bfd0b60fd3d2871be7eca30db2e7',
    },
    {
      firstsent: 'Property Maintenanse',
      back1: '../../../assets/images/image-4.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      img3: 'https://img.freepik.com/free-icon/head_318-371228.jpg?t=st=1682594625~exp=1682595225~hmac=0d10bc2d48e7084e0b1a2a99633e322c2c06748aaeec6062257ce9e580022fdc',
    },
    {
      firstsent: 'Project Manajment',
      back1: '../../../assets/images/image-4.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      img3: 'https://img.freepik.com/free-icon/cogwheel_318-503450.jpg?t=st=1682594421~exp=1682595021~hmac=55f2db6e4c29f7fe7687b4390eea80200c451017161b76136054e2220cf72364',
    },
    {
      firstsent: 'Virtual Design & Build',
      back1: '../../../assets/images/image-4.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      img3: 'https://img.freepik.com/free-icon/file_318-443752.jpg?t=st=1682594806~exp=1682595406~hmac=dce59a6fbd592f86bf25b86e10a24011149a82eb92a7906f66d6d88be2410dd5',
    },
    {
      firstsent: 'Preconstruction',
      back1: '../../../assets/images/image-4.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      img3: 'https://img.freepik.com/free-icon/payment-method_318-529437.jpg?t=st=1682596724~exp=1682597324~hmac=dc2fcba4cfe116d76fe75f17519a5131ed9779f023cbcf459453461e4e5d4e20',
    },
    {
      firstsent: 'Design & Build',
      back1: '../../../assets/images/image-4.jpg',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis.',
      btn: 'Read More',
      img3: 'https://img.freepik.com/free-icon/stats_318-174084.jpg?t=st=1682597025~exp=1682597625~hmac=69510aee9dae56f1e03149dfcddfc5aadc7929a454967d135467d51810624af4',
    },
  ];
  categories: any = [
    {
      paragraphdesign:
        'https://devsdesign.net/products/html/konstruk/assets/images/slider/style1/shapes/icons3.png',
    },
  ];
}
