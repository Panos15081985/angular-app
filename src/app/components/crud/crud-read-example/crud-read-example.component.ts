import { Component } from '@angular/core';
import { CrudNavbarExampleComponent } from '../crud-navbar-example/crud-navbar-example.component';

@Component({
  selector: 'app-crud-read-example',
  standalone: true,
  imports: [CrudNavbarExampleComponent],
  templateUrl: './crud-read-example.component.html',
  styleUrl: './crud-read-example.component.css'
})
export class CrudReadExampleComponent {

}
