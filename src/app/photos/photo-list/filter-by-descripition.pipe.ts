import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoComponent } from '../photo/photo.component';


@Pipe({name: 'filterByDescripition'})
export class FilterByDescripition implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo => photo.description)
    } else {
      return photos;
    }
  }


}
