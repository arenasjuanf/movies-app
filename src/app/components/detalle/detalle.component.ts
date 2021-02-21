import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { actorsResponse, movieDetail } from 'src/app/interfaces/interfaces';
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

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: false
  };

  constructor(
    private moviesService: MoviesService,
    private modalctrl : ModalController
    ) { }
  @Input('id') id;

  ngOnInit() {
    this.moviesService.getMovieDetails(this.id).subscribe((details: movieDetail) => {
      console.log(details);
      this.details = details
    });
    this.moviesService.getActores(this.id).subscribe((actors: actorsResponse) => {
      this.actors = actors.cast;
      console.log(this.actors);
    });
  }

  async back(){
    await this.modalctrl.dismiss()
  }

}
