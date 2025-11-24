// src/app/pages/home/home.routes.ts
import { Routes } from '@angular/router';
import { ContactUsPage } from './components/contact-us-page/contact-us-page';



export const CONTACT_US_ROUTES: Routes = [
  {
    path: '',
    component: ContactUsPage,
    title: 'Contact Us',
  },
];
