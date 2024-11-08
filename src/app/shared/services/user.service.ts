import { inject, Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { User } from '../interfaces/mongo-backend';
import { LoggedInUser } from '../interfaces/mongo-backend';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


const API_URL = environment.apiURL + "/user";

@Injectable({
  providedIn: 'root'//afto to service ginete ena global servise kai ola ta component pou to kaloun exoun oles tis idiotites tou

})
export class UserService {
  http: HttpClient = inject(HttpClient)
  router = inject(Router)
  user = signal<LoggedInUser | null>(null)
  //dimiourgo mia metavliti user i opoia einai tupou signal kai metavliti signal tha einai tupou LoggedInUser diladi tha 
  //exei tin domi tou LoggedInUser i tha einai null kai i arxiki tou timi tha einai null

  //elegxo an exei allaksi afti i signal se periptwsi allagis tis signal tote px thelw na trexei ena service mia methodo
  //gia na kanw afton ton elegxo theloume to effekt dimiourgontas ena cunstractor

  constructor(){
    //edw exoume valei parenthesis sti user gt einai san na apokta mia methodo i metavliti user
    //o constractor trexei mia fora  prwti fora otan kaloume to component ektos kai an periexei to effekt
    const access_token = localStorage.getItem("access_token")
    if(access_token){
      const decodeTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser

      this.user.set({
        fullname: decodeTokenSubject.fullname,
        email: decodeTokenSubject.email
      })
      
    }
    effect(()=>{
      if(this.user()){
        console.log("User Logged in: ",this.user()?.fullname);
      }else{
        console.log("No user logged in")
      }
    })
  }

  registerUser(user:User){
    return this.http.post<{msg: string}>(API_URL+"/register",user)//dilwnoume pou tha ginei i klisi kai stelnei ton user 
    //kai epidei xeroume ti tipos dedomenwn  einai tupos user kai ti tha parw pisw an xerw ti tha parw pisw grafoume 
    //<{msg:string}>
  }

  check_duplicate_emails(email:string){
    return this.http.get<{msg:string}>(API_URL+"/check_duplicate_email/"+email)
  }

  loginUser(credentials: Credential){
    return this.http.post<{access_token:string}>(API_URL+"/login",credentials)
  }

  logoutUser(){
    this.user.set(null);
    localStorage.removeItem('access_token')
    this.router.navigate(['login'])
  }
}
