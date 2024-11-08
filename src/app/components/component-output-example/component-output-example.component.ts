import { Component } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson } from '../../shared/interfaces/Person';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {

  showPersonClicked(person:EPerson){
    alert(this.personTemplate(person))
  }

  personTemplate(person: EPerson){
    return `
    Person Details
    
    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Address: ${person.address}
    `
}
}
