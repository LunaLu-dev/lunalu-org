import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nsfw',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './nsfw.component.html',
  styleUrl: './nsfw.component.css'
})
export class NsfwComponent {

  protected readonly window = window;
}
