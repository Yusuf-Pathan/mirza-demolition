import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
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
  ngOnInit(): void {
    this.ProjectCount1;
    this.ProjectCount2;
    this.ProjectCount3;
    this.ProjectCount4;
  }
}
