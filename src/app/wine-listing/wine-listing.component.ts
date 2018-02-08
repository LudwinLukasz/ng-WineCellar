import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
import { WinesService } from './../services/wines.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-wine-listing',
  templateUrl: './wine-listing.component.html',
  styleUrls: ['./wine-listing.component.css']
})
export class WineListingComponent implements OnInit {

  wines: Array<any>;
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'producer',
    'name',
    'vintage',
    'alcohol',
    'price',
    'variety'
  ];

  constructor(
    //private http: Http,
    private winesService: WinesService,
    private utilService: UtilService
  ) { }

  ngOnInit() {

    this.winesService.getAllWines()
    .subscribe(
      data => this.wines = data,
      error => this.error = error.statusText
    );

    this.winesService.newWineSubject.subscribe(
      data => this.wines = [data, ...this.wines]
    );
  }

}
