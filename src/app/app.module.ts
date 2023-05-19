import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './Page/about/about.component';
import { HomePageComponent } from './Page/home-page/home-page.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { DashbroadComponent } from './Page/Admin/dashbroad/dashbroad.component';
import { ProductComponent } from './Page/Admin/product/product.component';
import { NotfoundComponent } from './Layout/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    AboutComponent,
    HomePageComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    DashbroadComponent,
    ProductComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
