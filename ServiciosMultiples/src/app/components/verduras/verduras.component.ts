import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alimento } from '../../services/alimento.interface';
import { VerdurasService } from '../../services/verduras.service';
import { FrutasService } from '../../services/frutas.service';

@Component({
  selector: 'app-verduras',
  standalone: true,
  imports: [CommonModule],
  providers: [{ provide: FrutasService, useClass: VerdurasService }], // Con useClass usamos VerdurasService através de FrutasService
  templateUrl: './verduras.component.html'
})
export class VerdurasComponent {
  verduras: Alimento[] = inject(FrutasService).obtener();
}