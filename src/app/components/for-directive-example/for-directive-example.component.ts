import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/Person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {

  users:Person [] = [//to users einai tupou person alla ena array tupou person
    {
      "givenName": "Amelia",
      "surName": "Hall",
      "email": "amelia_j_hall@yahoo.com",
      "age": 32,
      "address": "Eldorado"
    },
    {
      "givenName": "Hannah",
      "surName": "Lopez",
      "email": "hlopez4@aol.com",
      "age": 64,
      "address": "Southard"
    },
    {
      "givenName": "Kevin",
      "surName": "Diaz",
      "email": "kr@aol.com",
      "age": 29,
      "address": "Maramec"
    },
    {
      "givenName": "Sofia",
      "surName": "Turner",
      "email": "s.turner@ymail.com",
      "age": 41,
      "address": "Ravenden Springs"
    },
    {
      "givenName": "Abigail",
      "surName": "Miller",
      "email": "amiller@rocketmail.com",
      "age": 73,
      "address": "Western Grove"
    },
    {
      "givenName": "Kimberly",
      "surName": "Brown",
      "email": "kimberly_m_brown83@outlook.com",
      "age": 72,
      "address": "Arlington"
    },
    {
      "givenName": "Joseph",
      "surName": "Cox",
      "email": "josephmatthewcox@ymail.com",
      "age": 63,
      "address": "South Grafton"
    },
    {
      "givenName": "Joshua",
      "surName": "Russell",
      "email": "joshuajrussell@hotmail.com",
      "age": 18,
      "address": "Trinidad"
    },
    {
      "givenName": "Joshua",
      "surName": "Thompson",
      "email": "joshua.thompson@yahoo.com",
      "age": 51,
      "address": "Saint Anthony"
    },
    {
      "givenName": "Victoria",
      "surName": "Moore",
      "email": "victoria58@live.com",
      "age": 44,
      "address": "Collins"
    }
  ]
}
