import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
productos: Producto[] = [
    { nombre: 'Producto A', descripcion: 'Descripción del producto A.', precio: 12500 },
    { nombre: 'Producto B', descripcion: 'Descripción del producto B.', precio: 9990 },
    { nombre: 'Producto C', descripcion: 'Descripción del producto C.', precio: 5500 },
  ];
}
