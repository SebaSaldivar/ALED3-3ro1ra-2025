import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    const ok = this.auth.login(this.email, this.password);
    if (ok) this.router.navigateByUrl('/inicio');
    else this.error = 'Credenciales inválidas.';
  }

  demoAdmin(): void {
    this.email = 'admin@demo';
    this.password = 'admin';
  }
}
