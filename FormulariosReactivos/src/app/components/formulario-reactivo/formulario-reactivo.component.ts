import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const EMAIL_PATTERN =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/i;
/* juan_perez@algo9.com.ar */ 
@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css',
})
export class FormularioReactivoComponent {

  formularioReactivo!: FormGroup;

  constructor() {
    let controles: any = {
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN),
      ]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      recordar: new FormControl(false, []),
    };

    this.formularioReactivo = new FormGroup(controles);
  }

/*   Uso de Arrows Functions */
  formularioLogin = () => {
    if (this.formularioReactivo.valid) {
      const correoIngresado = this.formularioReactivo.controls['correo'].value;
      alert(`Bienvenido ${correoIngresado} !!!`);
    }
  };

  /*
  formularioLogin() {
    if (this.formularioReactivo.valid) {
        const correoIngresado = this.formularioReactivo.controls['correo'].value;
        alert(`Bienvenido ${correoIngresado} !!!`);
    }
  }
  */
}
