import { Injectable } from '@angular/core';
import { Alimento } from './alimento.interface';

@Injectable()
export class FrutasService {
  obtener(): Alimento[] {
    return [
      { nombre: 'Manzana', color: 'Rojo', precio: 1500, imagen: 'assets/frutas/manzana.jpg' },
      { nombre: 'Banana', color: 'Amarillo', precio: 1000, imagen: 'assets/frutas/banana.jpg' }
    ];
  }
}