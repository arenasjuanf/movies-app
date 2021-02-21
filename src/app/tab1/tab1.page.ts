import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestaMDB } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];
  private page: number = 1;


  constructor( private movies: MoviesService) {
  }

  ngOnInit(){
    this.movies.getFeature().subscribe((resp: RespuestaMDB) => {
      console.log(resp);
      this.peliculasRecientes = resp.results
    });

    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){

    this.movies.getPopular(this.page).subscribe((resp: RespuestaMDB) => {
      const tmp = [...this.peliculasPopulares, ...resp.results];
      this.page++;
      this.peliculasPopulares = tmp;
    });

  }

}
