import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {

  @Input() estudianteAEditar! : Estudiante;
  @Output() EventoEstudianteHijo: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  @Output() cerrarComponenteHijo: EventEmitter<void> = new EventEmitter<void>();

  EditarEstudiante(estudianteModificado:Estudiante){

    let estudianteActualizado : Estudiante = {
      legajo : estudianteModificado.legajo,
      nombre : estudianteModificado.nombre,
      apellido : estudianteModificado.apellido,
      carrera :  estudianteModificado.carrera,
      regular : estudianteModificado.regular,
      fecha_inscripcion : estudianteModificado.fecha_inscripcion
    } 

    this.EventoEstudianteHijo.emit(estudianteActualizado)
  }
 
  cerrarComponente() {
    this.cerrarComponenteHijo.emit();
  }
}
