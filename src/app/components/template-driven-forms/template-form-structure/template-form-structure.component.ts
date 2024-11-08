import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';//gia na anagnwrisei to ngForm 
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/Person';

@Component({
  selector: 'app-template-form-structure',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './template-form-structure.component.html',
  styleUrl: './template-form-structure.component.css'
})
export class TemplateFormStructureComponent implements AfterViewInit{
  @ViewChild("userForm",{static:false}) form:NgForm |undefined;//tha psaxeis na vreis sto template mou ena id pou exei onoma useform tha to kaneis otan fortosei olo to template diavase afto to komati useform 
  @Output() person = new EventEmitter<EPerson>()

  ngAfterViewInit(): void {
    //otan tha fortosei to component kai to template tote tha trexei afto
    //epeidi i forma dimiourgite sto template tha trexei meta to afterViewinit  

    setTimeout(()=>{
      if(this.form){
        this.form.setValue({
          givenName:"John",
          surName:"Doe",
          age:"30",
          email:"john@aueb.gr",
          address:"road2"
        })
      }
    },0)
  }
 
  onSubmit(value:any){
    console.log(value)
    console.log(this.form?.form.get('givenName')?.value)
    console.log(this.form?.value)
    this.person.emit(value as EPerson);
  }

  onSetValue(){
    this.form?.setValue({
      givenName:"lakis",
      surName:"lalakis",
      age:50,
      email:"a@A.aueb.gr",
      address:"road1"
    })
  }
}
