 import { Component, Input } from '@angular/core';

 @Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html'
})

// tslint:disable-next-line: one-line
export class PhotoComponent{
  @Input() description = '';
  @Input() url = '';
}
