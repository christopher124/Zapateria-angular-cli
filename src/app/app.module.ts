import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services

import {ProductsService} from "./services/products.service"

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shered/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { NewsComponent } from './components/home/news/news.component';
import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { NoveltiesComponent } from './components/home/novelties/novelties.component';
import { ProductComponent } from './components/home/product/product.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsComponent,
    NosotrosComponent,
    OffersComponent,
    NoveltiesComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AccordionModule,
    ButtonModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
