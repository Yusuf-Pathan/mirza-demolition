import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SpecialDemolitonRoutingModule } from './special-demoliton-routing.module';
import { SpecialDemolitonComponent } from './special-demoliton.component';
import { Routes ,RouterModule } from '@angular/router';
const routes : Routes =[
  {path : '', component:SpecialDemolitonComponent}
];

@NgModule({
  declarations: [SpecialDemolitonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    // SpecialDemolitonRoutingModule
  ]
})
export class SpecialDemolitonModule { }
