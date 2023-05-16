import { Component, Input, OnInit } from "@angular/core";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class AppComponent implements OnInit {
  
  constructor() {}
  name = 'Angular';
  pages = new Array(5);
  ngOnInit(): void {}
  
  clickHandler() {}


}
