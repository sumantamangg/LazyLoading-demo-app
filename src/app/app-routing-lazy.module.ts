import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => 
          import('./account/account.module').then((m) => m.AccountModule)
      },
      {
        path: 'product',
        loadChildren: () => 
          import('./product/product.module').then((m) => m.ProductModule)
      },
      {
        path: 'user',
        loadChildren: () => 
          import('./user/user.module').then((m) => m.UserModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => 
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
