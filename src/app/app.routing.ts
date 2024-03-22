import { FeatureFlagGuard } from './common/guards/feature-flag.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [FeatureFlagGuard],
    data: {
      featureFlag: 'home'
    }
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    canActivate: [FeatureFlagGuard],
    data: {
      featureFlag: 'about'
    }
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
    canActivate: [FeatureFlagGuard],
    data: {
      featureFlag: 'client'
    }
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    canActivate: [FeatureFlagGuard],
    data: {
      featureFlag: 'product'
    }
  },
  {
    path: 'credit',
    loadChildren: () => import('./pages/credit/credit.module').then(m => m.CreditModule),
    canActivate: [FeatureFlagGuard],
    data: {
      featureFlag: 'credit'
    }
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule),
    canActivate: [FeatureFlagGuard],
    data: {
      featureFlag: 'sale'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRouting { }
