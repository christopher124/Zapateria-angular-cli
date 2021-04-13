import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "http://localhost:3000/usuario";
  constructor(private htpp:HttpClient) { }

  GuardarUsuario(usuario:object){
    return this.htpp.post<any>(this.url,usuario);

}
EliminarUsuario(Email:String){
    return this.htpp.delete<any>(`${this.url}/${Email}`);
}

ModificarUsuario(usuario:object){
  return this.htpp.delete<any>(this.url,usuario);
}

ConsultarTodoCliente() {
  return this.htpp.get<any>(this.url);
}
}
