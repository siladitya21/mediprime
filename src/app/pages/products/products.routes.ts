// src/app/pages/home/home.routes.ts
import { Routes } from '@angular/router';
import { ProductsComponent } from '../home/components/products/products';
import { ProductsPage } from './components/products-page/products-page';



export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsPage,
    title: 'Products',
  },
];
