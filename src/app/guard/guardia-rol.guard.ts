import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardiaRolGuard implements CanActivate {
  constructor(private router:Router){}
//   /*canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }*/

  canActivate() : boolean {
    if(localStorage.getItem('rol')=='Gerente' || localStorage.getItem('rol')=='Administrador'){
     return true;
   }
    else{
      this.router.navigate(['/home']);
     return false;
  }
 }
 
}
