import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { OurProjectsRoutingModule } from './our-projects-routing.module';
import { OurProjectsComponent } from './our-projects.component';
@NgModule({
  declarations: [OurProjectsComponent],
  imports: [
    CommonModule,
    OurProjectsRoutingModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [OurProjectsComponent]
})
export class OurProjectsModule {}
