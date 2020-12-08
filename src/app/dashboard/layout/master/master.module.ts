import { MatIconModule } from '@angular/material/icon';
import { SouthtwoComponent } from './../../pages/southtwo/southtwo.component';
import { SouthoneComponent } from './../../pages/southone/southone.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './../../pages/home/home.component';
import { MasterComponent } from './master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../../public/public.module';



@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent,
    SouthoneComponent,
    SouthtwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicModule,
    MatIconModule
  ]
})
export class MasterModule { }
