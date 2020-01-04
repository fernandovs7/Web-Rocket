import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebRocket';
  name: string = 'Fernando';
  address: string = 'Tres Ríos, Cartago';
  phone: string = '8723-3116';
}
