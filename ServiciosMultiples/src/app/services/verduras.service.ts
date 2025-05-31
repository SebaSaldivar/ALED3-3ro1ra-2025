import { Injectable } from '@angular/core';
import { Alimento } from './alimento.interface';

@Injectable()
export class VerdurasService {
  obtener(): Alimento[] {
    return [
      { nombre: 'Lechuga', color: 'Verde', precio: 800, imagen: 'assets/verduras/lechuga.jpg' },
      { nombre: 'Zanahoria', color: 'Naranja', precio: 600, imagen: 'assets/verduras/zanahoria.jpg' }
    ];
  }
}