import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing-template',
  templateUrl: './landing-template.component.html',
  styleUrls: ['./landing-template.component.scss'],
})
export class LandingTemplateComponent implements OnInit {
  loader = true;

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
    setTimeout(() => {
      this.loader = false;
    }, 9000);
  }

  scrolltop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }
}
