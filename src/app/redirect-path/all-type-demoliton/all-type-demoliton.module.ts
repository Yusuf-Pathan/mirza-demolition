import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AllTypeDemolitonRoutingModule } from './all-type-demoliton-routing.module';
import { AllTypeDemolitonComponent } from './all-type-demoliton.component';
import { Routes , RouterModule } from '@angular/router';
  
const routes : Routes =[
  {path : '', component:AllTypeDemolitonComponent}
];

@NgModule({
  declarations: [AllTypeDemolitonComponent],
  imports: [
    CommonModule,
    // AllTypeDemolitonRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AllTypeDemolitonModule { }
