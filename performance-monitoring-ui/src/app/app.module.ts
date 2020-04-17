import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { HostsComponent } from './Hosts/hosts/hosts.component';
import { ChartsComponent } from './Charts/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HostsComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule, 
    ClickOutsideModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
