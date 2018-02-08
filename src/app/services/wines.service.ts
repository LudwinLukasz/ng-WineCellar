import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class WinesService {

  public newWineSubject = new Subject<any>();

  constructor(private http: Http) { }
  getAllWines() {
    return this.http.get('api/wines')
    .map(res => res.json())
  }

  addWine(data) {
    data.image = 'default-wine';
    this.newWineSubject.next(data);
  }

  addWineRest(data) {
    data.image = 'default-wine';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/api/wine',data, options);
  }
}
