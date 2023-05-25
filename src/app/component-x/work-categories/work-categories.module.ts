import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCategoriesRoutingModule } from './work-categories-routing.module';
import { WorkCategoriesComponent } from './work-categories.component';

@NgModule({
  declarations: [WorkCategoriesComponent],
  imports: [CommonModule, WorkCategoriesRoutingModule],
  exports: [WorkCategoriesComponent]
})
export class WorkCategoriesModule {}
