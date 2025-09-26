// src/app/core/auth.service.ts
import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface UserSession {
  email: string;
  role: 'user' | 'admin';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;
  private user: UserSession | null = null;
  private readonly STORAGE_KEY = 'gdr_auth';

  // Detecta si estamos en navegador
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  // Referencia segura al storage (null si no hay browser)
  private get storage(): Storage | null {
    return this.isBrowser && typeof localStorage !== 'undefined' ? localStorage : null;
  }

constructor() {
  // Restaurar sesión SOLO si hay storage disponible
  const serializedSession = this.storage?.getItem(this.STORAGE_KEY);
  if (!serializedSession) return;

  try {
    const session = JSON.parse(serializedSession) as UserSession;
    if (session && session.email) {
      this.loggedIn = true;
      this.user = session;
    }
  } catch {
    // ignora valores corruptos: evita que un JSON inválido te tumbe la app en el arranque.
  }
}


  // DEMO: acepta cualquier email/password no vacíos
  login(email: string, password: string): boolean {
    if (!email || !password) return false;

    const role: 'user' | 'admin' = email === 'admin@demo' ? 'admin' : 'user';
    this.user = { email, role };
    this.loggedIn = true;

    // Persistir solo si existe localStorage
    this.storage?.setItem(this.STORAGE_KEY, JSON.stringify(this.user));
    return true;
    // Nota: si no hay storage (SSR/test), funciona la sesión en memoria,
    // solo que no se conservará al recargar.
  }

  logout(): void {
    this.loggedIn = false;
    this.user = null;
    this.storage?.removeItem(this.STORAGE_KEY);
  }

  isLoggedIn(): boolean { return this.loggedIn; }
  getUser(): UserSession | null { return this.user; }
}
