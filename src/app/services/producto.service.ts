import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = "http://localhost:3000/productos";

  constructor(private htpp:HttpClient) { }

  GuardarProduc(producto:object){
      return this.htpp.post<any>(this.url,producto);
  }

  ModificarProduc(producto:object){
    return this.htpp.put<any>(this.url,producto);
  }

  EliminarProduc(_idProduc:Number){
      return this.htpp.delete<any>(this.url + "/" + _idProduc);
  }

  ConsultarProduc(Nombre:String){
    return this.htpp.get<any>(this.url + "/"+ Nombre);

  }

  ConsultarTodoProduc(){
 return this.htpp.get<any>(this.url);
  }
}
