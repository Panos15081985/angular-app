import { Component } from '@angular/core';
import { CrudNavbarExampleComponent } from '../crud-navbar-example/crud-navbar-example.component';

@Component({
  selector: 'app-crud-delete-example',
  standalone: true,
  imports: [CrudNavbarExampleComponent],
  templateUrl: './crud-delete-example.component.html',
  styleUrl: './crud-delete-example.component.css'
})
export class CrudDeleteExampleComponent {

}
