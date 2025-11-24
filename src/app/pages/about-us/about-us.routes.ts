// src/app/pages/home/home.routes.ts
import { Routes } from '@angular/router';
import { AboutUsPage } from './components/about-us-page/about-us-page';



export const ABOUTS_US_ROUTES: Routes = [
  {
    path: '',
    component: AboutUsPage,
    title: 'About Us',
  },
];
