import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpComingProjectsRoutingModule } from './up-coming-projects-routing.module';
import { UpComingProjectsComponent } from '../up-coming-projects.component';
@NgModule({
  declarations: [UpComingProjectsComponent],
  imports: [CommonModule, UpComingProjectsRoutingModule],
})
export class UpComingProjectsModule {}
