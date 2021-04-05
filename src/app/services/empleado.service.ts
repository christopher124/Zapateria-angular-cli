import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = "http://localhost:3000/empleados";
  constructor(private http:HttpClient) { }

  GuardarEmp(empleado:object){
    return this.http.post<any>(this.url,empleado);
}

ModificarEmp(empleado:object){
  return this.http.put<any>(this.url,empleado);
}

EliminarEmp(_idEmpleado:Number){
    return this.http.delete<any>(`${this.url}/${_idEmpleado}`);
}

ConsultarEmp(Nombres:String){
  return this.http.get<any>(this.url + "/"+ Nombres);

}

ConsultarTodoEmp(){
return this.http.get<any>(this.url);
}
}
