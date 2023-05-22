import { Component } from '@angular/core';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss'],
})
export class QualitiesComponent {
  panelOpenState = false;

  benefits: any = [
    {
      subimg:
        'https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png',
      subtext: ' YOUR BENEFIT',
      title: ' Build better futures with steady focus on quality',
      img: '../../../assets/images/image-5.jpg',
      matpaneltitle1: 'We are a global family  that values diversity',
      matpaneltitle2: 'We on and shape our future',
      matpaneltitle3: 'We create sustainable growth',
      matparagraph:
        ' Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally cumstances occur in which toil and pain can procuresteadysteady.',
    },
  ];
}
