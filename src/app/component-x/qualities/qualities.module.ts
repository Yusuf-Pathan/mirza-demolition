import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualitiesRoutingModule } from './qualities-routing.module';
import { QualitiesComponent } from './qualities.component';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [QualitiesComponent],
  imports: [CommonModule, QualitiesRoutingModule, MatExpansionModule],
  exports: [QualitiesComponent]
})
export class QualitiesModule {}
