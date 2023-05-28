import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      title: 'Our team of experts will help you get things complete reality.',
      paragraph: 'mirza demolitions will help you get things complete reality.',
      btn: 'CONTACT NOW',
    },
  ];
  completedProjects: number = 0;
  yearsOfExperience: number = 0;
  currentProjects: number = 0;
  options: number = 0;

  constructor(public router: Router) {}

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/src/app/component-x/FooterxComponent']);
    });
  }

  ngOnInit(): void {
    const completedProjects = setInterval(() => {
      this.completedProjects++;
      if (this.completedProjects === 312) {
        clearInterval(completedProjects);
      }
    }, 50);

    const yearsOfExperience = setInterval(() => {
      this.yearsOfExperience++;
      if (this.yearsOfExperience == 302) {
        clearInterval(yearsOfExperience);
      }
    }, 50);

    const currentProjects = setInterval(() => {
      this.currentProjects++;
      if (this.currentProjects == 153) {
        clearInterval(currentProjects);
      }
    }, 50);

    const options = setInterval(() => {
      this.options++;
      if (this.options == 32) {
        clearInterval(options);
      }
    }, 50);
  }
}
