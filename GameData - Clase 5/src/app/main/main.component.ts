import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  personajes = [
    {
      nombre: 'Mario',
      videojuego: 'Super Mario Bros',
      fechaCreacion: new Date(1985, 8, 13),
      popularidad: 0.98,
      foto: 'mario.png',
      activo: true
    },
    {
      nombre: 'Link',
      videojuego: 'The Legend of Zelda',
      fechaCreacion: new Date(1986, 1, 21),
      popularidad: 0.95,
      foto: 'link.png',
      activo: true
    },
    {
      nombre: 'Lara Croft',
      videojuego: 'Tomb Raider',
      fechaCreacion: new Date(1996, 9, 25),
      popularidad: 0.87,
      foto: 'lara.png',
      activo: false
    }
  ];
}
