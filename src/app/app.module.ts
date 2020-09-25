import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { BoxComponent } from './components/box/box.component';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
