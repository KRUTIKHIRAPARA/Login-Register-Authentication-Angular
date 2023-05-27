import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SecureGuard } from './secure.guard';
import { ProductsComponent } from './products/products.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'register',
    component:RegisterPageComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[SecureGuard]
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'stocks',
    component:StocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
