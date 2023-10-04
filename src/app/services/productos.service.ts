import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-1da78-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe((resp: any) => {
        // No me funciona poniendo la interfaz de Producto en vez del any
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
      });
  }

}
