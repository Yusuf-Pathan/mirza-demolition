import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheadDemolitonRoutingModule } from './shead-demoliton-routing.module';
import { SheadDemolitonComponent } from './shead-demoliton.component';
import { Routes ,RouterModule} from '@angular/router';
const routes : Routes =[
  {path : '', component:SheadDemolitonComponent}
];
@NgModule({
  declarations: [SheadDemolitonComponent],
  imports: [
    CommonModule,
    SheadDemolitonRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class SheadDemolitonModule { }
