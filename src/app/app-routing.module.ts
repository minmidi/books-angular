import { CategoriesComponent } from './pages/modules/categories/categories.component';
import { BooksComponent } from './pages/modules/books/books.component';
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
  // Redirect to login when you want to access the admin page
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // Path Login
  {path: 'login', component: LoginComponent},
  // Path register
  {path: 'register', component: RegisterComponent},
  // Path admin
  {path: 'admin', component: DefaultComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'books', component: BooksComponent},
      {path: 'categories', component: CategoriesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
