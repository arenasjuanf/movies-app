import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar:string = ""
  ideas: string[] = ['Spiderman', 'Baby driver', 'Lord of rings', 'Avengers']
  loading = false;
  constructor(private moviesService: MoviesService) {}

  search(event){
    const value = event.detail.value;
    if(value){
      this.loading = true;
      this.moviesService.searchMovie(value).subscribe(result => {
        this.loading = false;

        console.log(result);
      })
    }
  }

  setText(word){
    this.textoBuscar = word;

  }

}
