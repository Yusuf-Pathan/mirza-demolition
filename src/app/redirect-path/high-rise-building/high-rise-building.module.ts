import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HighRiseBuildingRoutingModule } from './high-rise-building-routing.module';
import { Routes , RouterModule } from '@angular/router';
import { HighRiseBuildingComponent } from './high-rise-building.component';
const routes : Routes =[
  {path : '', component:HighRiseBuildingComponent}
];

@NgModule({
  declarations: [HighRiseBuildingComponent],
  imports: [
    CommonModule,
    // HighRiseBuildingRoutingModule
    RouterModule.forChild(routes)
  ]
})
export class HighRiseBuildingModule { }
