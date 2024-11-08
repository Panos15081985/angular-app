import { Component, Input } from '@angular/core';
import { EPerson, Person } from '../../shared/interfaces/Person'; 

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() person: Person | undefined//se afto to interface einai to age me number sto apo katw string
  @Input() eperson:EPerson |undefined
}
