import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
     
   images: any = [
    {
      image: 'https://thumbs.dreamstime.com/z/construction-plan-tools-18498793.jpg',
    },
  ];
}
