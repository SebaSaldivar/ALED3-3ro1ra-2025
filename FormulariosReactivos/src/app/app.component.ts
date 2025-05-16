import { Component } from '@angular/core';
import { FormularioReactivoComponent } from "./components/formulario-reactivo/formulario-reactivo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormulariosReactivos';
}
