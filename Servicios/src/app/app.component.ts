import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListadoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}