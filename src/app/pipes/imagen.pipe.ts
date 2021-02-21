import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  url = environment.imgPath;

  transform(img: string, size: string = "w500"): unknown {
    if(!img){
      return "./assets/no-image-banner.jpg"
    }

    const url = `${this.url}/${size}/${img}`;
    return url;
  }

}
