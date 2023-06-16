import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences.component';
import { MdButtonModule } from 'src/app/common-components/md-button/md-button.module';

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [CommonModule, ExperiencesRoutingModule, MdButtonModule],
  exports: [ExperiencesComponent],
})
export class ExperiencesModule {}
