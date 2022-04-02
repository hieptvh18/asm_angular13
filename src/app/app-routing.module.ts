import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductComponent } from './pages/client/product/product.component';
import { HomeComponent } from './pages/home/home.component';


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
      }
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
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
