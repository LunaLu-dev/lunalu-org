import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lunalu-org';
}
