import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductosPhpService, Producto } from '../services/productos-php.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  error = '';

  constructor(private productosPhp: ProductosPhpService) {}

  ngOnInit(): void {
    this.productosPhp.getProductos$().subscribe({
      next: (lista) => this.productos = lista,
      error: () => this.error = 'No se pudo cargar la lista de productos'
    });
  }
}
