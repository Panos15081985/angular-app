import { Component } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/Person';
import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ ReactiveFormStructureComponent, PersonTableComponent, SimpleDataTableComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

    currentPerson: EPerson | undefined;

    onPerson(person: EPerson){
        console.log("Parent>>>", person);
        this.currentPerson = person;//kai stin sunexeia to pername me output stp person table
        ManyPerson.push(person)//vazei sto array many person afto pou eirthe apo tin forma 
    }
}
