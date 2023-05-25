import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingDemolitionComponent } from './building-demolition.component';
import { Routes , RouterModule } from '@angular/router';
const routes : Routes =[
  {path : '', component: BuildingDemolitionComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuildingDemolitionComponent]
})
export class BuildingDemolitionModule { }
