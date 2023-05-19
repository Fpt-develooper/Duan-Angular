import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { NotfoundComponent } from './Layout/notfound/notfound.component';
import { DashbroadComponent } from './Page/Admin/dashbroad/dashbroad.component';
import { AboutComponent } from './Page/about/about.component';
import { HomePageComponent } from './Page/home-page/home-page.component';
import { ProductListComponent } from './component/product-list/product-list.component';
const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "about", component: AboutComponent }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashbroad', pathMatch: 'full' },
      { path: 'dashbroad', component: DashbroadComponent },
      { path: 'product', component: ProductListComponent }
    ]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
