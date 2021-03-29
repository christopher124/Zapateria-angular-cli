import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardiamenuGuard implements CanActivate {
  //se creo el constructor y se le agregaron los parametros haciendo referencia al servicio
  constructor(
    private iniciosesionServicio: LoginService,
    private router:Router) { }
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/

  //se crea un canActivate de tipo boolena/cuando un metodo es diferente a vacio, se realiza un return
  canActivate() :boolean{
    if(this.iniciosesionServicio.eslogueado()){
      return true;
    }
    else{
      //redireccionamiento de ruta
      this.router.navigate(['/iniciosesion']);
      return false;
    }


  }
  
}
