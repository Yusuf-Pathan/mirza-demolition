import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BridgeDemolitionRoutingModule } from './bridge-demolition-routing.module';
import { Routes , RouterModule } from '@angular/router';
import { BridgeDemolitionComponent } from './bridge-demolition.component';
  
const routes : Routes =[
  {path : '', component:BridgeDemolitionComponent}
];

@NgModule({
  declarations: [BridgeDemolitionComponent],
  imports: [
    CommonModule,
    // BridgeDemolitionRoutingModule
    RouterModule.forChild(routes)
  ]
})
export class BridgeDemolitionModule { }
