import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'animate.css';

// connect api
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/client/product/product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    ProductComponent,
    DashboardComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
