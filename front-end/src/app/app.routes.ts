import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },         // show HomeComponent at /
  { path: 'contact', component: ContactFormComponent, title: 'Contact' }
];
