import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = "http://localhost:3000/empleados";
  constructor(private htpp:HttpClient) { }

  GuardarEmp(empleado:object){
    return this.htpp.post<any>(this.url,empleado);
}

ModificarEmp(empleado:object){
  return this.htpp.put<any>(this.url,empleado);
}

EliminarEmp(_idEmpleado:Number){
    return this.htpp.delete<any>(this.url + "/" + _idEmpleado);
}

ConsultarEmp(Nombres:String){
  return this.htpp.get<any>(this.url + "/"+ Nombres);

}

ConsultarTodoEmp(){
return this.htpp.get<any>(this.url);
}
}
