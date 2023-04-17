import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce } from 'ng-animate';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [trigger('bounce', [transition('* => *', useAnimation(bounce))])],
})
export class AboutComponent implements OnInit {
  about: any = [
    {
      Img: 'https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk=',
    },
  ];

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }
}
