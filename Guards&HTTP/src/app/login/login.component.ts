import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { AuthService, Sesion } from '../services/auth.service';
import { AuthServiceHttp, Usuario, Sesion as Sesion } from '../services/auth-http.service';

// Servicio LOCAL


// para usar HTTPClient, descomentá el import y cambia la inyección


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  // servicio local:
  //constructor(private auth: AuthService, private router: Router) {}
  constructor(private auth: AuthServiceHttp, private router: Router) {}

  // 1) onSubmit LOCAL 

   /*onSubmit(): void {
    this.error = '';
    const sesion: Sesion | null = this.auth.validarCredenciales(this.email, this.password);

    if (sesion !== null) {
      this.auth.guardarSesion(sesion);
      this.router.navigate(['/inicio']);
    } else {
      this.error = 'Credenciales inválidas';
    }
  } */

  // ==================================================
  // 2) onSubmit HTTP (DESCOMENTAR para segunda parte)
  //    - Cambiá la inyección del constructor a:
  //      constructor(private auth: AuthServiceHttp, private router: Router) {}
  //    - Y descomentá este método:
  // ==================================================

  onSubmit(): void {
    this.error = '';

    this.auth.getUsuariosPorEmail$(this.email).subscribe({
      next: (usuarios: Usuario[]) => {
        // Validación mínima en cliente (DEMO)
        const encontrado = usuarios.find(u => u.password === this.password);
        if (!encontrado) {
          this.error = 'Credenciales inválidas';
          return;
        }
        const sesion: Sesion = { email: encontrado.email, role: encontrado.role };
        this.auth.guardarSesion(sesion);
        this.router.navigate(['/inicio']);
      },
      error: () => {
        this.error = 'No se pudo contactar al servidor';
      }
    });
  }

}
