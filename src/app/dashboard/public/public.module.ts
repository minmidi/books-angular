import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';



@NgModule({
  declarations: [
    HeadersComponent,
    FootersComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeadersComponent,
    FootersComponent
  ]
})
export class PublicModule { }
