import { Component } from '@angular/core';
import { CrudNavbarExampleComponent } from '../crud-navbar-example/crud-navbar-example.component';

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [CrudNavbarExampleComponent],
  templateUrl: './crud-dashboard.component.html',
  styleUrl: './crud-dashboard.component.css'
})
export class CrudDashboardComponent {

}
