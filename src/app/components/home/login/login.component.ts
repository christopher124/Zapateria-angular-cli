import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service"
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    Email: "",
    Password: ""
  }

  constructor(
    private loginServices: LoginService,
    private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login(){
    //metodo subscribe para trabajar la respuesta que viene de express
    this.loginServices.login(this.usuario).subscribe(res=>{
      console.log(res);
      //invocar la palabra recervada localStorage
      localStorage.setItem('token',res);
      this.loginServices.erescliente(this.usuario).subscribe(res=>{
        localStorage.setItem('clientes', res.Nombres)
         this.router.navigate(['/home']);
      }, err=>{
        console.log(err);      
       this.loginServices.eresEmpleado(this.usuario).subscribe(res=>{
        localStorage.setItem('empleados',res.Nombres);
       localStorage.setItem('rol',res.Rol.Nombre);
       this.router.navigate(['/dashboard'])
    }, err=>console.log(err));

       })
      this.toastr.success('Bienvenido',)
        
      //ruteo con variable para que mande a otro sitio
      this.router.navigate(['/dashboard'])

  },
  err=>{
    console.log(err);
    this.toastr.error('usuario o contraseña incorrectos','inicio de sesion')
  }
  );
  }

}
