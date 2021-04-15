import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardiaRolGuard implements CanActivate {
  constructor(private router: Router) {}
  //   /*canActivate(
  //     route: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     return true;
  //   }*/

  canActivate(): boolean {
    if (
      localStorage.getItem('rol') == 'Gerente' ||
      localStorage.getItem('rol') == 'Administrador'
    ) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
