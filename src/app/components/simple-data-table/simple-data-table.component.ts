import { Component, EventEmitter, Output } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/Person'; 
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-data-table',
  standalone: true,
  imports: [],
  templateUrl: './simple-data-table.component.html',
  styleUrl: './simple-data-table.component.css'
})
export class SimpleDataTableComponent {

  @Output() personClicked = new EventEmitter<EPerson>();

  manyPerson = ManyPerson

  sortOrder:EPerson = {
    givenName: "none",
    surName: "none",
    age: "none",
    email: "none",
    address: "none"
  }

  sortData(sortKey: keyof EPerson):void{
    if(this.sortOrder[sortKey] === 'asc'){
      this.sortOrder[sortKey] = 'desc'
      this.manyPerson = sortBy(this.manyPerson,sortKey).reverse();
    }else{
      this.sortOrder[sortKey]='asc';
      this.manyPerson = sortBy(this.manyPerson,sortKey)
    }

  }

  sortSign(sortKey: keyof EPerson):string{
    if(this.sortOrder[sortKey] === "asc")
      return "&uarr;"
    else if(this.sortOrder[sortKey] === "desc")
      return "&darr;"
    else return ""
  }

  onPersonClick(person : EPerson){
    console.log(person)
    this.personClicked.emit(person)
  }
}
