import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductComponent } from './pages/client/product/product.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ErrNotFoundComponent } from './pages/err-not-found/err-not-found.component';


const routes: Routes = [
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'phones',
        component:ProductComponent
      },
      {
        path:'phones/:id',
        component:ProductDetailComponent
      },
      
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'phones',
        component:ProductAdminComponent
      },
      {
        path:'phones/create',
        component:ProductCreateComponent
      },
      {
        path:'phones/edit/:id',
        component:ProductEditComponent
      },
      
    ]
  },
  {
    path:'404',
    component:ErrNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
