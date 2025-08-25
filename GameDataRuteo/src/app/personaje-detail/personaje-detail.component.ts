import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaje-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personaje-detail.component.html',
  styleUrls: ['./personaje-detail.component.css']
})
export class PersonajeDetailComponent {
  id: number | null = null;

  constructor(private route: ActivatedRoute) {
    // Suscripción a los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.id = params['id'] ? Number(params['id']) : null;
    });
  }
}

