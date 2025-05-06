import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { ComponenteHijoComponent } from "../componente-hijo/componente-hijo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-general',
  standalone: true,
  imports: [CommonModule,  FormsModule, ComponenteHijoComponent],
  templateUrl: './componente-general.component.html',
  styleUrl: './componente-general.component.css'
})
export class ComponenteGeneralComponent {

  constructor() {

  }

  mostrarComponenteHijo: boolean = false;
  mostrarFormularioAgregar: boolean = false;
  
  estudianteAModificar: Estudiante = {
    legajo: null,
    nombre: '',
    apellido: '',
    carrera: '',
    regular: false,
    fecha_inscripcion: new Date() 
  };
  

  estudianteNuevo : Estudiante = {
    legajo : null,
    nombre : '',
    apellido : '',
    carrera : '',
    regular : false,
    fecha_inscripcion: new Date('2025-02-13')
  }

  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      carrera : 'Angular',
      regular : true,
      fecha_inscripcion: new Date('2025-02-12')
    },
    { 
      legajo : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      carrera : 'Java',
      regular : false,
      fecha_inscripcion: new Date('2025-03-02')
    },
    { 
      legajo : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      carrera : 'Javascript',
      regular : true,
      fecha_inscripcion: new Date('2025-04-10')
    },
    { 
      legajo : 4741,
      nombre : 'Sol Patricia',
      apellido : 'González',
      carrera : 'MySQL',
      regular : false,
      fecha_inscripcion: new Date('2025-02-22')
    },
    { 
      legajo : 4358,
      nombre : 'Carla Andrea',
      apellido : 'Funes',
      carrera : 'NodeJs',
      regular : true,
      fecha_inscripcion: new Date('2025-02-28')
    },
  ]

  AgregarEstudianteEnEsteComponente(){

    this.listaEstudiantes.push(this.estudianteNuevo);
    this.CancelarFormAgregar();
    
  }

  EliminarAlumno(estudianteAEliminar: Estudiante) {
    const index = this.listaEstudiantes.findIndex((unEstudiante) => unEstudiante.legajo === estudianteAEliminar.legajo);
    if (index !== -1) {
      this.listaEstudiantes.splice(index, 1);
    }
  }

EditarAlumnoQueVieneDesdeHijo(estudiante:Estudiante){
  const index = this.listaEstudiantes.findIndex((unEstudiante) => unEstudiante.legajo === estudiante.legajo);
  if (index !== -1) {
    this.listaEstudiantes[index] = estudiante;
  }
}

EditarAlumno(estudianteAEditar:Estudiante): void {
  this.mostrarComponenteHijo = true;

  this.estudianteAModificar = { 
    legajo: estudianteAEditar.legajo,
    nombre: estudianteAEditar.nombre,
    apellido: estudianteAEditar.apellido,
    carrera: estudianteAEditar.carrera,
    regular: estudianteAEditar.regular,
    fecha_inscripcion: estudianteAEditar.fecha_inscripcion,
  }; 
}

cerrarComponenteHijo() {
  this.mostrarComponenteHijo = false;
}

mostrarFormAgregar(): void {
  this.mostrarFormularioAgregar = true;
}

CancelarFormAgregar(): void {

  this.estudianteNuevo = { // Restablecer el objeto estudianteActual a sus valores iniciales
    legajo: null,
    nombre: '',
    apellido: '',
    carrera: '',
    regular: false,
    fecha_inscripcion: new Date() 
  };

  this.mostrarFormularioAgregar = false;
}

}

