import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//services
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { LoginService } from './services/login.service';
import { ClienteService } from './services/cliente.service';
import { EmpleadoService } from './services/empleado.service';
import { ProductoService } from './services/producto.service';

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
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { EmpleadoComponent } from './components/administracion/empleado/empleado.component';
import { ProductosComponent } from './components/administracion/productos/productos.component';
import { DashboardComponent } from './components/administracion/dashboard/dashboard.component';
import { ShopComponent } from './components/clients/shop/shop.component';
import { CartComponent } from './components/clients/cart/cart.component';
// import
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ContactoComponent } from './components/home/contacto/contacto.component';

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
    DashboardComponent,
    ShopComponent,
    CartComponent,
    ContactoComponent,
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
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatStepperModule,
  ],
  providers: [
    ProductsService,
    LoginService,
    ProductoService,
    EmpleadoService,
    ClienteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
