import { Component, OnInit, ViewChild } from '@angular/core';
import { WinesService } from './../services/wines.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-wine-form',
  templateUrl: './add-wine-form.component.html',
  styleUrls: ['./add-wine-form.component.css']
})
export class AddWineFormComponent implements OnInit {
  @ViewChild('newWineForm') newWineForm: NgForm;
  sweetnessTypes: Array<string> = ['sweet','semisweet','offdry','dry'];
  constructor(public winesService: WinesService) { }

  ngOnInit() {
  }
  onWineSubmit(data): void {
    this.winesService.addWine(data);
    this.winesService.addWineRest(data).subscribe(
      res => console.log('Done')
    );
    this.newWineForm.reset();
  }
}
