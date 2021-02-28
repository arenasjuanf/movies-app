import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { movieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: movieDetail[] = [];

  constructor(
    private storage: Storage,
    public toastController: ToastController
  ) { }

  async saveMovie(movie: movieDetail){
    this.movies = await this.getMovies();
    let exist = this.movies.find(m => m.id === movie.id);

    if(!exist){
      this.movies.push(movie);
      this.storage.set('movies',this.movies).then(async () => {
        const toast = await this.toastController.create({
          message: 'Saved.',
          duration: 1500,
          position: 'top'
        });
        toast.present();
      });
    }
  }


  async getMovies(){
    const movies = await this.storage.get('movies');
    return movies;
  }
}
