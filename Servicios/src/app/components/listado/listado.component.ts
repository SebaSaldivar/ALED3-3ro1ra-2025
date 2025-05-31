import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../../services/frutas.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  private frutasService = inject(FrutasService);
  frutas = this.frutasService.obtenerFrutas();
}