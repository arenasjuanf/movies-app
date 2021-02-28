import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: false
  };

  @Input('peliculas') peliculas;

  constructor(private modalCtrl: ModalController, ) { }

  ngOnInit() {}


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
