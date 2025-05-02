import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // necesario para ngModel

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  busqueda: string = '';
}
