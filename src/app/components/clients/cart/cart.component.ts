import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { IItem } from '../../../interfaces/item.interface';
import { ToastrService } from 'ngx-toastr';

declare var paypal: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public items: any[] = [];
  addScript: boolean = false;
  finalAmount: number = 1;
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox:
        'ASxERHNA7vVeoCmrZmQt2_MU0yb7CDP9v1zSgja02DO3XKUmFPPHVB9NvweGHhQEUy1UZu2sNvJifNdp',
    },
    commit: true,
    payment: (data: any, actions: any) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: this.totalPrice,
                currency: 'MXN',
              },
            },
          ],
        },
      });
    },
    onAuthorize: (data: any, actions: any) => {
      return actions.payment.execute().then(() => {
        this.router.navigate(['/home']);
        this.toastr.success('Compra realizada con exito');
      });
    },
  };
  public objetos: any;

  public totalPrice: number = 0;
  public totalQuantity: number = 0;
  constructor(
    private _cartService: CartService,
    private router: Router,
    private toastr: ToastrService,
    public iniciosesionServicio: LoginService
  ) {}

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#pay');
      });
    }
    this._cartService.currentDataCart$.subscribe((x) => {
      if (x) {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce(
          (sum, current) => sum + current.Precio * current.quantity,
          0
        );
      }
    });
  }

  nologin(): void {
    this.toastr.error(
      'Para realizar esta compra, es necesario que esté registrado',
      'Error al comprar'
    );
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagEelemnt = document.createElement('script');
      scripttagEelemnt.src = 'http://www.paypalobjects.com/api/checkout.js';
      scripttagEelemnt.onload = resolve;
      document.body.appendChild(scripttagEelemnt);
    });
  }

  public remove(producto: IItem) {
    this._cartService.removeElementCart(producto);
    this.toastr.success('Productos eliminados el carrito');
  }
}
