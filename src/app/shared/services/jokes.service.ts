import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DadJoke, ChuckNorrisJoke} from '../interfaces/jokes'



const DAD_JOKES_API_URL = "https://icanhazdadjoke.com/";
const CHUCK_NORRIS_API_URL = "https://api.chucknorris.io/jokes/random";

@Injectable({
  providedIn: 'root'//simainei einai global mporei na to dei oli i efarmogi
})
export class JokesService {

  http: HttpClient = inject(HttpClient) //mia metavliti pou kanei inject oles tis idiotites tis HttpClient

  //constructor(httpClient:HttpClient) { } palia kaname afto

  getDadJokes(){
    //einai asugxrones kliseis kai opio erthei prwto tha emfanistei
    //<any> ti tipos? otidipote any i ftiaxneis interface 

    return this.http.get<DadJoke>(DAD_JOKES_API_URL,{
      headers:{
        Accept:"application/json"
      }
    })
  }

  getChuckNorrisJoke(){
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_API_URL,{
      headers:{
        Accept: 'application/json'
      }
    })
  }


}
