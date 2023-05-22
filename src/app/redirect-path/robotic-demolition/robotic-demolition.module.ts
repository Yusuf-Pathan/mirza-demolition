import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { RoboticDemolitionRoutingModule } from './robotic-demolition-routing.module';
import { Routes , RouterModule } from '@angular/router';
import { RoboticDemolitionComponent } from './robotic-demolition.component';
  
const routes : Routes =[
  {path : '', component:RoboticDemolitionComponent}
];

@NgModule({
  declarations: [RoboticDemolitionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoboticDemolitionModule { }
