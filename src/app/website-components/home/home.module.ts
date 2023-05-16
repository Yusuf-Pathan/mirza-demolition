import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    
  ]
})
export class HomeModule { }
