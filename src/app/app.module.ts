import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WineListingComponent } from './wine-listing/wine-listing.component';
import { WineCardComponent } from './wine-card/wine-card.component';
import { WinesService } from './services/wines.service';
import { UtilService } from './services/util.service';
import { AddWineFormComponent } from './add-wine-form/add-wine-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WineListingComponent,
    WineCardComponent,
    AddWineFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WinesService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
