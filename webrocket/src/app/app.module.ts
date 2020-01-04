import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MybootstrapModule } from './mybootstrap/mybootstrap.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MybootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
