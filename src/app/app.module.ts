import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { ProductsComponent } from './component/products/products.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from './component/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserdetailService } from './services/userdetail.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductsComponent,
    AccountComponent,
    RegisterComponent,
    FooterComponent,
    MapComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
