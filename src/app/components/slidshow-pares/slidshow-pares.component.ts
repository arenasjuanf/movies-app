import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidshow-pares',
  templateUrl: './slidshow-pares.component.html',
  styleUrls: ['./slidshow-pares.component.scss'],
})
export class SlidshowParesComponent implements OnInit {
  @Input('peliculas') peliculas;
  @Output()cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: false,
    spaceBetween: -15
  };

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  getMore(){
    this.cargarMas.emit();
  }

  async showDetail(id){
    console.log(id);
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
