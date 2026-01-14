// src/app/pages/home/home.routes.ts
import { Routes } from '@angular/router';
import { ProductsPage } from './components/products-page/products-page';
import { ProductDetails } from './components/product-details/product-details';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsPage,
    title: 'Products',
  },
  {
    path: ':id',
    component: ProductDetails,
    title: 'Product Details'
  }
];