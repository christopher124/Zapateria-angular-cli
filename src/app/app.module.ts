import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule } from '@angular/forms'


//services
import { HttpClientModule } from '@angular/common/http';
import {ProductsService} from "./services/products.service"
import {LoginService} from "./services/login.service" 
import {ClienteService} from './services/cliente.service'
import {EmpleadoService} from "./services/empleado.service"
import {ProductoService} from "./services/producto.service"

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
import { ClientesComponent } from './components/administracion/clientes/clientes.component'
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import { EmpleadoComponent } from './components/administracion/empleado/empleado.component';
import { ProductosComponent } from './components/administracion/productos/productos.component';
// import 

import {MatTableModule} from '@angular/material/table';
import {SplitterModule} from 'primeng/splitter';
import {MegaMenuModule} from 'primeng/megamenu';
import { DashboardComponent } from './components/administracion/dashboard/dashboard.component';




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
    RegisterComponent,
    ClientesComponent,
    EmpleadoComponent,
    ProductosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AccordionModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    SplitterModule,
    MegaMenuModule
  ],
  providers: [ProductsService,LoginService,ProductoService,EmpleadoService,ClienteService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
