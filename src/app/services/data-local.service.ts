import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { movieDetail, Pelicula } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: movieDetail[] = [];

  constructor(
    private storage: Storage,
    public toastController: ToastController
  ) { 
    this.getMovies();
  }

  async saveMovie(movie: movieDetail){
    this.movies = await this.getMovies();
    let exist = this.movies.findIndex(m => m.id === movie.id);
    exist == -1 ? this.movies.push(movie) : this.movies.splice(exist, 1);
    this.storage.set('movies',this.movies).then(async () => {
      const toast = await this.toastController.create({
        message: exist == -1 ? 'Saved.' : 'Deleted.',
        duration: 1500,
        position: 'top'
      });
      toast.present();
    });
  }

  async getMovies(){
    const movies  = await this.storage.get('movies');
    this.movies = movies || [];
    return this.movies;
  }

  async movieExist( id ){
    await this.getMovies();
    const existe = this.movies.find(m => m.id == id );
    return existe ? true : false;
  }

}
