import { MasterModule } from './dashboard/layout/master/master.module';
import { DefaultModule } from './pages/layout/default/default.module';
// Import form module
import { FormsModule } from '@angular/forms';
// End import form module

// Import variable enviroment
import { environment } from './../environments/environment';
// End Import variable enviroment

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// End import firebase module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // forms module check
    FormsModule,
    // Config variable firebase on enviroment.ts
    AngularFireModule.initializeApp(environment.firebase),
    // Import firebase database
    AngularFireDatabaseModule,
    // Import firebase firestore
    AngularFirestoreModule,
    // Import Default Module
    DefaultModule,
    // Import Master Module
    MasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
