import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas;
  genres: string[] = [];

  constructor(
    private dataLocalService: DataLocalService,
    private moviesService: MoviesService
  ) {
    this.moviesService.getGenres().subscribe(genres => this.genres = genres['genres']);
  }

  ngOnInit() {
    this.dataLocalService.getMovies().then((movies) => {
      const tmp = {};
      movies.forEach(movie => {
        movie.genres.forEach( g => {
          if(!tmp[g.name]) tmp[g.name] = [];
          tmp[g.name].push(movie);
        })
      });
      this.peliculas = tmp;
    })
  }
}
