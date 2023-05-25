import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenifitsRoutingModule } from './benifits-routing.module';
import { BenifitsComponent } from './benifits.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [BenifitsComponent],
  imports: [CommonModule, BenifitsRoutingModule, MatIconModule],
  exports: [BenifitsComponent]
})
export class BenifitsModule {}
