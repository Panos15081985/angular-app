import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import {jwtDecode } from 'jwt-decode';
import { LoggedInUser } from '../../shared/interfaces/mongo-backend';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})

export class UserLoginComponent {

  userService = inject(UserService);
  router =inject(Router);
  invalidLogin = false;

  form = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",Validators.required)
  })

  onSubmit(){
    const credentials = this.form.value as Credential;
    this.userService.loginUser(credentials).subscribe({
      next:(response) => {
        const access_token = response.access_token
        console.log(access_token)
        localStorage.setItem("access_token",access_token)
        const decodeTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser;//ti tupos tha erthei i unknow i LoggedInUser
        console.log(decodeTokenSubject)
//ekxwrisi timwn sti signal
        this.userService.user.set({
          fullname: decodeTokenSubject.fullname,
          email: decodeTokenSubject.email
        })

        this.router.navigate(["restricted-content-example"])
        
      },
      error:(error) =>{
          console.log("Login Error",error)
          this.invalidLogin = true;
      }
      

    })
  }




}

//uparxei ena kleidi sto backend kai me vasi afto to kleidi kodikopeiete i pliroforia access_token 
//apo edw kai pera kathe pliroforia pou tha zitaw apo to backend tha stelnw kai to token kai den thelw na rwtaei kathe fora 
//poios eimai afto loipon tha prepei na ensomatothei stous headers opote kathe fora koitaei to backend einai valid to 
//token an valid proxoraei alliws mas xanavazei na kanoume login

//to jwt theloume na to apothikevoume sto browser me to localStorage  an selida mou thelei na rwtisei poio einai jwt na 
//to pernei apo to storage
