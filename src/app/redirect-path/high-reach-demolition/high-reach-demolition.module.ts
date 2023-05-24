import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighReachDemolitionComponent } from './high-reach-demolition.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HighReachDemolitionComponent }];

@NgModule({
  declarations: [HighReachDemolitionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HighReachDemolitionModule {}
