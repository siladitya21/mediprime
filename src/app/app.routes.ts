import { Routes } from '@angular/router';
import { ContentComponent } from './core/layouts/content/content';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about-us/about-us.routes').then((m) => m.ABOUTS_US_ROUTES),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.routes').then((m) => m.CONTACT_US_ROUTES),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./pages/not-found/not-found.routes').then((m) => m.NOT_FOUND_ROUTES),
      },
      {
        path: '**',
        redirectTo: 'not-found',
      },
    ],
  },
];
