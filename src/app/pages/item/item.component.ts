import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDescripcion | undefined;
  id: string | undefined;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        // console.log(parametros);

        this.productoService.getProducto(parametros['id'])
          .subscribe((producto: any) => {
            // No me funciona la interfaz ProductoDescripcion en vez de any
            this.id = parametros['id'];
            this.producto = producto;
            // console.log(producto);
          });
      });
  }

}
