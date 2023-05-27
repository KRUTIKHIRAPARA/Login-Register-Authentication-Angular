import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { ToastrModule } from 'ngx-toastr';
import { MatModuleModule } from './modules/mat-module/mat-module.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './includes/header/header.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { StocksComponent } from './stocks/stocks.component';
import { SmallsidebarComponent } from './includes/smallsidebar/smallsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderComponent,
    SidebarComponent,
    StocksComponent,
    SmallsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
