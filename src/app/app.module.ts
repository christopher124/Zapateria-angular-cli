import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsComponent,
    NosotrosComponent,
    OffersComponent,
    NoveltiesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
