import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes para las rutas
import {HomeComponent} from './components/home/home/home.component'
import {NewsComponent} from './components/home/news/news.component'
import {NosotrosComponent} from './components/home/nosotros/nosotros.component'
import {OffersComponent} from  './components/home/offers/offers.component'
import {NoveltiesComponent} from './components/home/novelties/novelties.component'
import {ProductComponent} from './components/home/product/product.component'
import {LoginComponent} from './components/home/login/login.component'
import {RegisterComponent} from './components/home/register/register.component'

const routes: Routes = [

  {path: "home", component: HomeComponent},
  {path: "news", component: NewsComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "offers", component: OffersComponent},
  {path: "novelties", component: NoveltiesComponent},
  {path: "product/:id", component: ProductComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
