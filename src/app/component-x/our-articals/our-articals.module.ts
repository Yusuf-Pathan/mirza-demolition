import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurArticalsRoutingModule } from './our-articals-routing.module';
import { OurArticalsComponent } from './our-articals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [OurArticalsComponent],
  imports: [
    CommonModule,
    OurArticalsRoutingModule,
    CarouselModule,
    MatIconModule
  ],
  exports: [OurArticalsComponent]
})
export class OurArticalsModule { }
