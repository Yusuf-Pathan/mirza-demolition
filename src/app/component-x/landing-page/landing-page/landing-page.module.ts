import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import {CarouselModule } from 'ngx-owl-carousel-o';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { LandingPageComponent } from '../landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
    IvyCarouselModule,
    
  ]
})
export class LandingPageModule { }
