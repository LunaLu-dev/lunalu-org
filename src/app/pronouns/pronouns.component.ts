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
  //time:string = "00:00:00";
  today:Date = new Date();
  time: string = "";
  // @ts-ignore
  intervalId: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.today = new Date();
      this.time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  born:Date = new Date(2004, 4, 24);
  age:number = this.today.getFullYear() - this.born.getFullYear()
  protected readonly window = window;
}
