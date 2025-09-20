import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService, Sesion } from './services/auth.service';
import { PerfilComponent } from "./perfil/perfil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private plataforma: Object,
    private router: Router,
    private auth: AuthService
  ) {}

  esAdmin(): boolean {
    if (!isPlatformBrowser(this.plataforma)) return false;

    const sesion: Sesion | null = this.auth.leerSesion();

    if (sesion === null) return false;

    return sesion.role === 'admin';
  }

  cerrarSesion(): void {
    if (isPlatformBrowser(this.plataforma)) {
      this.auth.borrarSesion(); // centralizado
    }
    this.router.navigate(['/inicio']);
  }
}
