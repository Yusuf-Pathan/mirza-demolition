import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  users: any = [
    {
      image: `https://thumbs.dreamstime.com/z/construction-plan-tools-18498793.jpg`,
      detail: `Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempore At Ducimus Unde Tempora Ipsam Quasi. Lorem Ipsum Dolor Sit Amet.`,
      shortDetail: `Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Veritatis Tempore Aut Repellat Blanditiis Aliquid! Lorem Ipsum Dolor Sit Amet.`,
      fullName: `Alexander Parkinson`,
      date: `Jun 20, 2019`,
      profileImage: `https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg`,
    },
    {
      image: `https://thumbs.dreamstime.com/z/construction-plan-tools-18498793.jpg`,
      detail: `Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempore At Ducimus Unde Tempora Ipsam Quasi. Lorem Ipsum Dolor Sit Amet.`,
      shortDetail: `Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Veritatis Tempore Aut Repellat Blanditiis Aliquid! Lorem Ipsum Dolor Sit Amet.`,
      fullName: `Alexander Parkinson`,
      date: `Jun 20, 2019`,
      profileImage: `https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg`,
    },
  ];

  images: any = [
    {
      image:
        'https://thumbs.dreamstime.com/z/construction-plan-tools-18498793.jpg',
    },
  ];
}
