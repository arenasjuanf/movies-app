import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { delay } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar:string = ""
  ideas: string[] = ['Spiderman', 'Baby driver', 'Lord of rings', 'Avengers']
  movies: Pelicula[] = [];
  loading = false;
  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  search(event){
    const value = event.detail.value;
    if(value){
      this.loading = true;
      this.moviesService.searchMovie(value).pipe().subscribe(result => {
        this.movies = result['results'];
        this.loading = false;

      })
    }else{
      this.movies = [];
    }
  }

  setText(word){
    this.textoBuscar = word;

  }

  async showDetail(id){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      mode: 'ios',
      componentProps:{
        id
      }
    });

    modal.present();

  }

}
