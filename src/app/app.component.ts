import { Component } from '@angular/core';
import {slideTransitionAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideTransitionAnimation]
})
export class AppComponent {
}
