import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasComponent } from './components/frutas/frutas.component';
import { VerdurasComponent } from './components/verduras/verduras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FrutasComponent, VerdurasComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  mostrarFrutas = true;
}