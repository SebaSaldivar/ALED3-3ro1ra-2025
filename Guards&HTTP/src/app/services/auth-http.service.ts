import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export type Rol = 'user' | 'admin';

export interface Usuario {
  id?: string;           
  email: string;
  password: string;      
  role: Rol;
}

export interface Sesion {
  email: string;
  role: Rol;
}

@Injectable({ providedIn: 'root' })

export class AuthServiceHttp {
  private readonly BASE = 'https://68c7964c5d8d9f51473244c7.mockapi.io'; 
    // Mostrar modif en config.ts

  constructor(private http: HttpClient) {}

  /** Trae de MockAPI los usuarios cuyo email coincide (querystring).
   *  Observable que emite 1 vez y completa. */
  getUsuariosPorEmail$(email: string): Observable<Usuario[]> {
    const url = `${this.BASE}/usuarios?email=${encodeURIComponent(email)}`;
    return this.http.get<Usuario[]>(url);
  }

  // Persistencia de sesión (igual que el servicio local)
  guardarSesion(sesion: Sesion): void {
    localStorage.setItem('sesion', JSON.stringify(sesion));
  }
  leerSesion(): Sesion | null {
    const txt = localStorage.getItem('sesion');
    return txt ? (JSON.parse(txt) as Sesion) : null;
  }
  borrarSesion(): void {
    localStorage.removeItem('sesion');
  }
}
