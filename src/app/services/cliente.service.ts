import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = "http://localhost:3000/clientes";
  constructor(private htpp:HttpClient) { }

  GuardarCliente(cliente:object){
    return this.htpp.post<any>(this.url,cliente);
}

ModificarCliente(cliente:object){
  return this.htpp.put<any>(this.url,cliente);
}

EliminarCliente(_idcliente:Number){
    return this.htpp.delete<any>(this.url + "/" + _idcliente);
}

ConsultarCliente(Nombres:String){
  return this.htpp.get<any>(this.url + "/"+ Nombres);

}

ConsultarTodoCliente(){
return this.htpp.get<any>(this.url);
}
}
