import { RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../../public/public.module';

import { HomeComponent } from './../../pages/home/home.component';
import { SouthtwoComponent } from './../../pages/southtwo/southtwo.component';
import { SouthoneComponent } from './../../pages/southone/southone.component';
import { CloneComponent } from './../../pages/clone/clone.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent,
    SouthoneComponent,
    SouthtwoComponent,
    CloneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicModule,
    MatIconModule,
  ]
})
export class MasterModule { }
