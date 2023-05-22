import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MassExcavationRoutingModule } from './mass-excavation-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { MassExcavationComponent } from './mass-excavation.component';

const routes: Routes = [{ path: '', component: MassExcavationComponent }];

@NgModule({
  declarations: [MassExcavationComponent],
  imports: [
    CommonModule,
    // MassExcavationRoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class MassExcavationModule { }
