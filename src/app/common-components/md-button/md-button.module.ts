import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonComponent } from './md-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MdButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [MdButtonComponent],
})
export class MdButtonModule {}
