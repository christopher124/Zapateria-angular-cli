import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { getLocaleFirstDayOfWeek } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:3000/usuarios/iniciosesion";
  // private urlcli = "http://localhost:3000/nombre";
  // private urlemp = "http://localhost:3000/nombre";

  constructor(private http:HttpClient,
    private router:Router) { }

    login(usuario:any){
      //metodo POST para el servicio 
      return this.http.post<any>(this.url,usuario);
    }
    eslogueado(){
      //metodo para indicar si existe la variable token en localStorage, solo retornara el contenido de la informacio
      return !!localStorage.getItem('token');
    }
  //   esCliente(){
  //     return !!localStorage.getItem('cliente');
  //   }
  //   erescliente(usuario:object){
  //     return this.http.post<any>(this.urlcli,usuario);
  //   }
  //   esEmpleado(){
  //     return !!localStorage.getItem('empleado')
  // }
  // eresEmpleado(usuario:object){
  //   return this.http.post<any>(this.urlemp,usuario);
  // }

  cerrarSesion(){
      //eliminacion de variable localStorage esto elimina cualquier variable que este en la parte de aplicacion
      localStorage.clear();
      //redirigirlo a una ruta que sea conveninte 
      this.router.navigate(['/iniciosesion']);
  
    }
}
  //agregar funciones y variables
