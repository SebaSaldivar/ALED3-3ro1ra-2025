import { Component } from '@angular/core';

import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { MainComponent } from "./main/main.component"; // <- IMPORTAR FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'FirstProyect';

  nombre: string = '';  // Modelo de datos que se vincula con el input

}
