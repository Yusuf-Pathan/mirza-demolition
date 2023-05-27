import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  name: string = 'Angular';
  pages: any = new Array(5);

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {}
}
