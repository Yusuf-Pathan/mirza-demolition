import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTypeExcavatorRateComponent } from './all-type-excavator-rate.component';
// import { AllTypeExcavatorRateRoutingModule } from './all-type-excavator-rate-routing.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: AllTypeExcavatorRateComponent }];

@NgModule({
  declarations: [AllTypeExcavatorRateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllTypeExcavatorRateModule {}
