import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../../services/empleado.service';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
empleados:any;
empleado={
  _idEmpleado:"",
  Nombres:"",
  Apellidos:"",
  Direccion:"",
  Telefono:"",
  Fecha_Nacimiento:"",
  Email:"",
  Password:"",
  Rol:{
    Nombre:"",
    Sueldo:"",
    Fecha_ingre:""
  },
  Sucursal:{
    NombreSuc:"",
    DireccionSuc:"",
    TelefonoSuc:"",
    CiudadSuc:""
  }


}
  constructor(private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
  }
GuardaEmpleado(){
  this.empleadoServicio.GuardarEmp(this.empleado).subscribe(res=>{
    alert("Empleado Registrado");
  },
  err=>console.log(err));
}

ModificarEmpleado(){
  this.empleadoServicio.ModificarEmp(this.empleado).subscribe(res=>{
    alert("Empleado Modificado");
  },
  err=>console.log(err));
}

EliminarEmpleado(){
this.empleadoServicio.EliminarEmp(parseInt(this.empleado._idEmpleado)).subscribe(res=>{
  alert("Empleado Eliminado");
},
err=>console.log(err));
}

ConsultarEmpleado(){
this.empleadoServicio.ConsultarEmp(this.empleado.Nombres).subscribe(res=>{
  this.empleado=res;
},
err=>console.log(err));
}

ConsultaTodoEmpleado(){
this.empleados=this.empleadoServicio.ConsultarTodoEmp();
}
}
