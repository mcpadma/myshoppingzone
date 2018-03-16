import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import{ FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { ProductsComponent } from './component/products/products.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from './component/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserdetailService } from './services/userdetail.service';
import { ValidateService } from './services/validate.service';
import { DataentryComponent } from './component/dataentry/dataentry.component';
import { AuthService } from './services/auth.service';


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
    DataentryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [UserdetailService, ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
