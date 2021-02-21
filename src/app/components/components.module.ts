import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidshowBackdropComponent } from './slidshow-backdrop/slidshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlidshowParesComponent } from './slidshow-pares/slidshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    SlidshowBackdropComponent, SlideshowPosterComponent, SlidshowParesComponent, DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlidshowBackdropComponent ,
    SlideshowPosterComponent,
    SlidshowParesComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
