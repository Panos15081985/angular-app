import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-crud-navbar-example',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './crud-navbar-example.component.html',
  styleUrl: './crud-navbar-example.component.css'
})
export class CrudNavbarExampleComponent {

}
