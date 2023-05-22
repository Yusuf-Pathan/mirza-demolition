import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from '../about-us.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, MatIconModule],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}
