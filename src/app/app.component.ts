import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  photos: Object[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {

    this.photoService.listFromUse('flavio')
    .subscribe(photos => this.photos = photos);
  }
}


