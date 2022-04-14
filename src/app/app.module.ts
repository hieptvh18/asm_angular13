import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'animate.css';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// connect api
import {HttpClientModule} from '@angular/common/http';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductComponent } from './pages/client/product/product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { HeadAdminComponent } from './layouts/blocks/head-admin/head-admin.component';
import { ScriptAdminComponent } from './layouts/blocks/script-admin/script-admin.component';
import { NavAdminComponent } from './layouts/blocks/nav-admin/nav-admin.component';
import { AsideAdminComponent } from './layouts/blocks/aside-admin/aside-admin.component';
import { BtnStatusComponent } from './components/btn-status/btn-status.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { ErrNotFoundComponent } from './pages/err-not-found/err-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    ProductComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductAdminComponent,
    HeadAdminComponent,
    ScriptAdminComponent,
    NavAdminComponent,
    AsideAdminComponent,
    BtnStatusComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ShowErrorComponent,
    ErrNotFoundComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,//form reactive,
    FormsModule//form md
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
