import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { TemplateFormStructureComponent } from './template-form-structure/template-form-structure.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/Person';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [PersonTableComponent, SimpleDataTableComponent, TemplateFormStructureComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  onPerson(person:EPerson){
    ManyPerson.push(person)
  }
}
