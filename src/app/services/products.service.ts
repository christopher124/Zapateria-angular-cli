import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productos: Producto[] =
  [
      {
        nombre: "Zapatillas color hueso",
        bio: "Zapatillas color hueso excelente para cualquier ocasión",
        img: "assets/productos/Balerina hueso.jpg",
        aparicion: "2021-01-30",
        casa:"$ 899.00 pesos"
      },
      {
        nombre: "Huarache de piso",
        bio: "Huarache de piso excelente para cualquier ocasión",
        img: "assets/productos/Huarache de piso.jpg",
        aparicion: "2021-01-30",
        casa:"$ 899.00 pesos"
      },
      {
        nombre: "Huarache de piso color amarillo",
        bio: "Huarache de piso amarillo excelente para cualquier ocasión",
        img: "assets/productos/IMG-20201118-WA0025.jpg",
        aparicion: "2021-01-30",
        casa:"$ 899.00 pesos"
      },
      {
        nombre: "Huarache de piso color madera",
        bio: "Huarache de piso color madera excelente para cualquier ocasión",
        img: "assets/productos/IMG-20201118-WA0026.jpg",
        aparicion: "2021-01-30",
        casa:"$ 899.00 pesos"
      },
      {
        nombre: "Zapatos color rosa",
        bio: "Zapatos color rosa excelente para cualquier ocasión",
        img: "assets/productos/Choclo ni rosa.jpg",
        aparicion: "2021-01-30",
        casa:"$ 899.00 pesos"
      },
      {
        nombre: "Huarache de piso color rosa",
        bio: "Huarache de piso color rosa excelente para cualquier ocasión",
        img: "assets/productos/Huarache plata.jpg",
        aparicion: "1941-11-01",
        casa:"$ 500.00 pesos precio por elegir"
      },
    ];

  constructor() { 
    console.log("Servicios listos para usar!!!!");
    
  }

  getProductos(): Producto[] {
      return this.productos;
  }

  getProducto(idx: number){
    return this.productos[idx];
  }

}

interface Producto{
nombre: String;
bio: String;
img: String;
aparicion: String;
casa: String;
}
