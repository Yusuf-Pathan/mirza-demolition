import { Component, OnInit } from '@angular/core';
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
  isMobileDisplay = false; // needs to be true when the user comes with mobile.

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {}
}
