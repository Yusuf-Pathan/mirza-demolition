import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BungalowDemolitionRoutingModule } from './bungalow-demolition-routing.module';
import { BungalowDemolitionComponent } from './bungalow-demolition.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: BungalowDemolitionComponent }];

@NgModule({
  declarations: [BungalowDemolitionComponent],
  imports: [
    CommonModule,
    // BungalowDemolitionRoutingModule
    RouterModule.forChild(routes),
  ],
})
export class BungalowDemolitionModule {}
