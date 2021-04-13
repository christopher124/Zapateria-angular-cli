import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { ShopComponent } from './components/clients/shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes para las rutas
import {HomeComponent} from './components/home/home/home.component'
import {NewsComponent} from './components/home/news/news.component'
import {OffersComponent} from  './components/home/offers/offers.component'
import {NoveltiesComponent} from './components/home/novelties/novelties.component'
import {ProductComponent} from './components/home/product/product.component'
import {LoginComponent} from './components/home/login/login.component'
import {RegisterComponent} from './components/home/register/register.component'
import {ClientesComponent} from './components/administracion/clientes/clientes.component'
import {EmpleadoComponent} from './components/administracion/empleado/empleado.component'
import {ProductosComponent} from './components/administracion/productos/productos.component'
import {DashboardComponent} from './components/administracion/dashboard/dashboard.component'
//guardias
import {GuardiaEmpGuard} from './guard/guardia-emp.guard';
import {GuardiaRolGuard} from './guard/guardia-rol.guard'
import { GuardiamenuGuard } from './guard/guardiamenu.guard'

const routes: Routes = [

  {path: "home", component: HomeComponent},
  {path: "news", component: NewsComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "offers", component: OffersComponent},
  {path: "novelties", component: NoveltiesComponent},
  {path: "product/:id", component: ProductComponent},
  {path: "iniciosesion", component: LoginComponent,},
  {path: "register", component: RegisterComponent},
  {path: "clientes", component: ClientesComponent, canActivate:[GuardiamenuGuard, GuardiaRolGuard] },
  {path: "empleados", component: EmpleadoComponent, canActivate:[GuardiamenuGuard,  GuardiaRolGuard]},
  {path: "productos", component: ProductosComponent, canActivate:[GuardiamenuGuard,  GuardiaRolGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate:[GuardiamenuGuard,  GuardiaRolGuard]},
  {path: "tienda", component: ShopComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
