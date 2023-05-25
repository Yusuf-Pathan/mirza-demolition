import { Component } from '@angular/core';

@Component({
  selector: 'app-benifits',
  templateUrl: './benifits.component.html',
  styleUrls: ['./benifits.component.scss'],
})
export class BenifitsComponent {
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
}
