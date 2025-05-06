import { Component } from '@angular/core';
import { ComponenteGeneralComponent } from "./components/componente-general/componente-general.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteGeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP1-ABM-Alumnos';
}
