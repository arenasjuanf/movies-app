import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { actorsResponse, movieDetail } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  details: movieDetail;
  actors: any;
  hide = true;
  exist: boolean;
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: false
  };
  
  constructor(
    private moviesService: MoviesService,
    private modalctrl : ModalController,
    private dataLocalService: DataLocalService
  ) { }
  @Input('id') id;

  ngOnInit() {

    this.searchMovie();

    this.moviesService.getMovieDetails(this.id).subscribe((details: movieDetail) => {
      this.details = details
    });
    this.moviesService.getActores(this.id).subscribe((actors: actorsResponse) => {
      this.actors = actors.cast;
    });
  }

  async searchMovie(){
    this.exist = await this.dataLocalService.movieExist( this.id );
  }

  async back(){
    await this.modalctrl.dismiss()
  }

  favorite(){
    this.dataLocalService.saveMovie(this.details).then(() => {
      this.searchMovie();
    }) ;
  }

}
