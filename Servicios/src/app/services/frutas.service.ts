import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FrutasService {
  obtenerFrutas() {
    return [
      { nombre: 'Manzana', color: 'Rojo', precio: 150 },
      { nombre: 'Banana', color: 'Amarillo', precio: 100 },
      { nombre: 'Kiwi', color: 'Verde', precio: 250 },
      { nombre: 'Naranja', color: 'Naranja', precio: 180 }
    ];
  }
}