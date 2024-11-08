import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/mongo-backend';



@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  userService = inject(UserService);
  registrationStatus:{success:boolean, message:String} = {
    //arxikopoisisi tis metavlitis mas
    success:false,
    message:"Not attempted yet"
  }

  form = new FormGroup({
    givenName: new FormControl("",Validators.required),
    surName: new FormControl("",Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(4)])
  },
  this.paswordConfirmValidator)//edw tou leme kathe fora pou pliktrologoume kati sti forma mas na trexei afto ton validator

  onSubmit(value:any){
    this.checkOnSubmit()
  }

  registerAnother(){
    this.registrationStatus = {success: false, message: "Not attempted yet"}
    this.form.reset()
  }

  check_duplicate_email(){
    const email = this.form.get("email")?.value
    if(email){
      this.userService.check_duplicate_emails(email).subscribe({
        next:(response) =>{
          console.log(response.msg)
          this.form.get('email')?.setErrors(null)
       
        },
        error:(response) =>{
          const message = response.error.msg;
          console.log(message)
          this.form.get("email")?.setErrors({duplicateEmail:true})
         
        }
      })
    }
  }

  paswordConfirmValidator(control: AbstractControl ):{[key:string]:boolean} |null{
    //xrisimopoioume gto abstractControll gia na ftiaxoume dikous mas validators
    const form = control as FormGroup
    const password = form.get("password")?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if(password && confirmPassword && password != confirmPassword){
      form.get("confirmPassword")?.setErrors({passwordMismatch: true});
      return{passwordMismatch: true}
    }

    return null
  }

  checkOnSubmit(){

    const email = this.form.get("email")?.value;
    const user: User ={
      givenName: this.form.get("givenName")?.value ||"",
      surName: this.form.get("surName")?.value || "",
      email: this.form.get("email")?.value || "",
      password: this.form.get("password")?.value || ""
    }

    if(email){
      this.userService.check_duplicate_emails(email).subscribe({
        next: (response) =>{
          this.userService.registerUser(user).subscribe({
            next: (response) => {
              this.registrationStatus = {success: true, message: response.msg}//apo to service erxte i msg metavliti
            },
            error: (response) => {
              let message = response.error.msg;
              this.registrationStatus = {success: false, message: message}
            }
          })

        },
        error:(response) => {
          console.log("Wrong")

        }
      })
    }
  }
}
