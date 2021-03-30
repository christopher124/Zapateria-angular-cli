import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "http://localhost:3000/usuarios";
  constructor(private htpp:HttpClient) { }

  GuardarUsuario(cliente:object){
    return this.htpp.post<any>(this.url,cliente);
}


}
