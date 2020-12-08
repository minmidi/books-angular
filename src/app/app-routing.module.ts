import { CloneComponent } from './dashboard/pages/clone/clone.component';
import { SouthtwoComponent } from './dashboard/pages/southtwo/southtwo.component';
import { SouthoneComponent } from './dashboard/pages/southone/southone.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { MasterComponent } from './dashboard/layout/master/master.component';
import { VietnameseComponent } from './pages/modules/vietnamese/vietnamese.component';
import { JapaneseComponent } from './pages/modules/japanese/japanese.component';
import { CategoriesComponent } from './pages/modules/categories/categories.component';
import { DashboardComponent } from './pages/modules/dashboard/dashboard.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import login
import { LoginComponent } from './pages/login/login.component';
// Import Register
import { RegisterComponent } from './pages/register/register.component';

// Import default
import { DefaultComponent } from './pages/layout/default/default.component';

const routes: Routes = [
  {path: '', component: MasterComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'vietnam', component: SouthoneComponent},
    {path: 'japan', component: SouthtwoComponent},
    {path: 'book', component: CloneComponent},
  ]},
  // Redirect to login when you want to access the admin page
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  // Path Login
  {path: 'login', component: LoginComponent},
  // Path register
  {path: 'register', component: RegisterComponent},
  // Path admin
  {path: 'admin', component: DefaultComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'japanese', component: JapaneseComponent},
      {path: 'vietnamese', component: VietnameseComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
