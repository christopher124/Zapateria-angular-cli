export class Product {

    id: number;
    nombre!: string;
    tipo!: string;
    descrip!: string;
    precio: number;
    mumeracion!: number;
    foto_prod: string;

    constructor(id: number,tipo: string, nombre: string, descrip: string, precio: number, mumeracion: number , foto_prod: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descrip = descrip;
        this.precio = precio;
        this.mumeracion = mumeracion;
        this.foto_prod = foto_prod;
    }
}
