import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantDemolitionRoutingModule } from './plant-demolition-routing.module';
import { PlantDemolitionComponent } from './plant-demolition.component';
import { Routes , RouterModule } from '@angular/router';
  
const routes : Routes =[
  {path : '', component:PlantDemolitionComponent}
];
@NgModule({
  declarations: [PlantDemolitionComponent],
  imports: [
    CommonModule,
    // PlantDemolitionRoutingModule
    RouterModule.forChild(routes)
  ]
})
export class PlantDemolitionModule { }
