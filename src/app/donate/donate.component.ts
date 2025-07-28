import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import Plausible from 'plausible-tracker'


const {trackEvent} = Plausible({
  domain: 'lunalu.org',
  apiHost: 'https://analytics.lunalu.org'
})

@Component({
  selector: 'app-donate',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  links: { name: string, url: string }[] = [
    {
      name: 'PayPal',
      url: 'https://paypal.me/lunalu04'
    },
    {
      name: 'Revolut',
      url: 'https://pay.lunalu.org'
    },
    {
      name: 'Swish',
      url: 'https://app.swish.nu/1/p/sw/?sw=0723150770&msg=&edit=msg&src=qr'
    },
    {
      name: 'Wishlist',
      url: 'https://wishlist.lunalu.org'
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

  protected readonly window = window;
}
