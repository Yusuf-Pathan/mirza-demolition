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
  constructor() {}

  ngOnInit(): void {}

  clickHandler() {}
}
