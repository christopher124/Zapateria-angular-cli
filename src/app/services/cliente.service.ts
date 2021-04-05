import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) {}

  GuardarCliente(cliente: object) {
    return this.http.post<any>(this.url, cliente);
  }

  ModificarCliente(cliente: object){
    return this.http.put<any>(this.url,cliente);
  }

  EliminarCliente(_idcliente: Number) {
    return this.http.delete<any>(`${this.url}/${_idcliente}`);
  }

  ConsultarCliente(Nombres: String) {
    return this.http.get<any>(this.url + '/' + Nombres);
  }

  ConsultarTodoCliente() {
    return this.http.get<any>(this.url);
  }
}
