import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { MatIconModule } from '@angular/material/icon';
import { MdButtonModule } from 'src/app/common-components/md-button/md-button.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, MatIconModule, MdButtonModule],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}
