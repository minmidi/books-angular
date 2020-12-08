import { VietnameseService } from './../../../services/vietnamese.service';
import { JapaneseService } from './../../../services/japanese.service';
import { VietnameseComponent } from './../../modules/vietnamese/vietnamese.component';
import { JapaneseComponent } from './../../modules/japanese/japanese.component';
import { environment } from './../../../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {CategoriesService} from '../../../services/categories.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { CategoriesComponent } from './../../modules/categories/categories.component';
import { SharedModule } from '../../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FormArrayName, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CategoriesComponent,
    JapaneseComponent,
    VietnameseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [CategoriesService, JapaneseService, VietnameseService]
})
export class DefaultModule { }
