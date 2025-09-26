import { Component } from '@angular/core';

import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from "@angular/router"; // <- IMPORTAR FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'GameDataRuteo';

  nombre: string = '';  // Modelo de datos que se vincula con el input

}
