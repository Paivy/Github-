import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'Form', component: FormComponent },
  { path: 'search', component: FormComponent },
  { path: 'Landing', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
