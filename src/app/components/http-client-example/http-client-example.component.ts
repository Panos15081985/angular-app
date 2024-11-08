import { Component, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {

  jokeService = inject(JokesService)
  dadJoke: string = '';
  chuckNorrisJoke: string= '';

  //alliws tha mporousame me cunstructor
  //constructor(jokeService: JokeService){}

  OnInit(){
    //gia an litourgisoun oi kliseis prepi na ruthmisoume kai to app.config
    this.refreshDad();
    this.refreshChuck();
  }

  refreshDad(){
    this.jokeService.getDadJokes()
      .subscribe((data)=>{
        this.dadJoke = data.joke;
      })
  }

  refreshChuck(){
    this.jokeService.getChuckNorrisJoke()
    .subscribe((data)=>{
      this.chuckNorrisJoke = data.value
    })
  }
}
