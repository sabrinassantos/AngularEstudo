import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  photos: Object[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {

    this.photoService.listFromUse('flavio')
    .subscribe(photos => this.photos = photos);
  }
}
