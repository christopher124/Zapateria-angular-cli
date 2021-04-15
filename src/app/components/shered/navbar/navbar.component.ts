import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public iniciosesionServicio: LoginService) {}

  ngOnInit(): void {}
  rol() {
    if (!!localStorage.getItem('rol')) {
      return localStorage.getItem('rol');
    } else {
      return '';
    }
  }

  // rolm() {
  //   if (!!localStorage.getItem('rol')) {
  //     return localStorage.getItem('rol');
  //   } else {
  //     return '';
  //   }
  // }

  public openCart: boolean = false;
  public cart() {
    //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }
}
