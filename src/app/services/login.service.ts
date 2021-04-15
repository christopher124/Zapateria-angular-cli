import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getLocaleFirstDayOfWeek } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/usuario/iniciosesion';
  private urlcli = 'http://localhost:3000/clientes/Nombres';
  private urlemp = 'http://localhost:3000/empleado/Nombres';

  constructor(private http: HttpClient, private router: Router) {}

  login(usuario: any) {
    //metodo POST para el servicio
    return this.http.post<any>(this.url, usuario);
  }
  eslogueado() {
    //metodo para indicar si existe la variable token en localStorage, solo retornara el contenido de la informacio
    return !!localStorage.getItem('token');
  }
  esCliente() {
    return !!localStorage.getItem('Cliente');
  }
  erescliente(cliente: object) {
    return this.http.post<any>(this.urlcli, cliente);
  }
  esEmpleado() {
    return !!localStorage.getItem('Empleado');
  }
  eresEmpleado(empleado: object) {
    return this.http.post<any>(this.urlemp, empleado);
  }

  ereEmpleado(nombres: string) {
    return this.http.post<any>(this.urlemp, nombres);
  }

  cerrarSesion() {
    //eliminacion de variable localStorage esto elimina cualquier variable que este en la parte de aplicacion
    localStorage.clear();
    //redirigirlo a una ruta que sea conveninte
    this.router.navigate(['/iniciosesion']);
  }
}
//agregar funciones y variables
