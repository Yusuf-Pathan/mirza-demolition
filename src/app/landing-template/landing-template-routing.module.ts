import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingTemplateComponent } from './landing-template.component';
const routes: Routes = [
  {
    path: '',
    component: LandingTemplateComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingTemplateRoutingModule {}
