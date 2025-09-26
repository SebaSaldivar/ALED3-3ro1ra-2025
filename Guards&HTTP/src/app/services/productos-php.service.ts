import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;                 // viene de la BD
  nombre: string;
  descripcion: string;
  precio: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosPhpService {
  // Para dev local con XAMPP apuntamos a localhost
  private readonly BASE = 'http://localhost/apiTienda';

  constructor(private http: HttpClient) {}

  getProductos$(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.BASE}/productos/listar.php`);
  }
}
