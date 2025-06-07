import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import Plausible from 'plausible-tracker'


const {trackEvent} = Plausible({
  domain: 'lunalu.org',
  apiHost: 'https://analytics.lunalu.org'
})

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
      this.time = this.today.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Stockholm"});
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  links: {name: string, url: string}[] = [
    {
      name: 'Personality Test',
      url: 'https://www.16personalities.com/profiles/infp-t/o/dhjxp3rqw'
    }
  ]

  linkClick(index: number) {

    trackEvent(
      'social_link_click',
      {
        props: {
          item: this.links[index].name,
          url: this.links[index].url,
          src: "luna.org"
        }
      }
    );

    window.open(this.links[index].url, '_blank');
  }
  born:Date = new Date(2004, 4, 24);
  age:number = this.today.getFullYear() - this.born.getFullYear()
  protected readonly window = window;
}
