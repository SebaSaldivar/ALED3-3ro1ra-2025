import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";
import { TablaDemoComponent } from "./tabla-demo/tabla-demo.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, TablaDemoComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // << corregido
})
export class AppComponent {
  title = 'PrimerAngular';
}
