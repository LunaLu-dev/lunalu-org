import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pronouns',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pronouns.component.html',
  styleUrl: './pronouns.component.css'
})
export class PronounsComponent {
  time:string = "TEST";
  age:number = 10;
}
