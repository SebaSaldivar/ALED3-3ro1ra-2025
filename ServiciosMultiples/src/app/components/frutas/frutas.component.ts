import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alimento } from '../../services/alimento.interface';
import { FrutasService } from '../../services/frutas.service';

@Component({
  selector: 'app-frutas',
  standalone: true,
  imports: [CommonModule],
  providers: [FrutasService],
  templateUrl: './frutas.component.html'
})
export class FrutasComponent {
  frutas: Alimento[] = inject(FrutasService).obtener();
}