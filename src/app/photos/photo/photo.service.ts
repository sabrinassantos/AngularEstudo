import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {


  constructor(private http: HttpClient){}


  listFromUse(userName: string){
    return this.http
    .get<object[]>(API + '/' + userName + '/photos');

    }
}
