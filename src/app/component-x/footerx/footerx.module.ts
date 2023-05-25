import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import { FooterxComponent } from './footerx.component';
import {MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [FooterxComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule
  ],
   exports: [FooterxComponent]
})
export class FooterxModule { }
