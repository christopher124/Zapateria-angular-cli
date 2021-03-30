import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterEvent, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class GuardiaEmpGuard implements CanActivate {

constructor(private iniciosesionservicio:LoginService,
    private router:Router){}
 
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate() : boolean{
    if(this.iniciosesionservicio.esEmpleado()){
      return true;
    } else{
      this.router.navigate(['/home']);
      return false;
    }
  }
  }