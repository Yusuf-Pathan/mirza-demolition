import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from '../reviews.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ReviewsComponent],
  imports: [CommonModule, ReviewsRoutingModule, CarouselModule, MatCardModule ,MatIconModule ,MatButtonModule],
})
export class ReviewsModule {}
