import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
