import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-md-button',
  templateUrl: './md-button.component.html',
  styleUrls: ['./md-button.component.scss'],
})
export class MdButtonComponent {
  @Input() text: string = '';
  @Output() buttonEmitter = new EventEmitter<boolean>(false);

  onClicked(): void {
    this.buttonEmitter.next(true);
  }
}
