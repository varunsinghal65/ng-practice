import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// container
import { PassengerDashBoardComponent } from './passenger-dashboard/containers/passenger-dashboard.component';

//dumb
import { CheckedinPaxCountComponent } from './passenger-dashboard/components/passenger-count/checkedIn-pax-count.component';
import { PassengerDetailComponent } from './passenger-dashboard/components/passenger-detail/passenger-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    //containers
    PassengerDashBoardComponent,
    //Dumb
    CheckedinPaxCountComponent, PassengerDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
