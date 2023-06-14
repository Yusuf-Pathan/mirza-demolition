import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MdButtonModule } from 'src/app/common-components/md-button/md-button.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MdButtonModule
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
