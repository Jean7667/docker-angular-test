import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component'; // Adjust path if needed, as discussed earlier

export const routes: Routes = [
  // Define a route for the Contact Form component
  { path: 'contact', component: ContactFormComponent, title: 'Contact Us' },

  // Optional: A default redirect route (e.g., to the contact page)
  { path: '', redirectTo: 'contact', pathMatch: 'full' },

  // Optional: A wildcard route for 404 Not Found pages
  // { path: '**', component: NotFoundComponent } // You'd create a NotFoundComponent if needed
];