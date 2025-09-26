// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service'; // ajustá el path si difiere

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  busqueda = '';

  constructor(private auth: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  userEmail(): string {
    return this.auth.getUser()?.email ?? 'Invitado';
  }

  userRole(): string {
    return this.auth.getUser()?.role ?? '-';
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
