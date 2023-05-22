import { Component } from '@angular/core';

@Component({
  selector: 'app-up-coming-projects',
  templateUrl: './up-coming-projects.component.html',
  styleUrls: ['./up-coming-projects.component.scss'],
})
export class UpComingProjectsComponent {
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
}
