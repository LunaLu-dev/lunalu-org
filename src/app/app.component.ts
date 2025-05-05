import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, FooterComponent, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lunalu-org';
}
