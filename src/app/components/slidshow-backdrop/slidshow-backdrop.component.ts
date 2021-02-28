import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidshow-backdrop',
  templateUrl: './slidshow-backdrop.component.html',
  styleUrls: ['./slidshow-backdrop.component.scss'],
})
export class SlidshowBackdropComponent implements OnInit {
  
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: false
  };

  @Input('peliculas') peliculas;

  constructor(private modalCtrl: ModalController) { }

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
