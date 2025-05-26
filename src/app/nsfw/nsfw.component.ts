import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import Plausible from 'plausible-tracker'

const {trackEvent} = Plausible({
  domain: 'lunalu.org',
  apiHost: 'https://analytics.lunalu.org'
})

@Component({
  selector: 'app-nsfw',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './nsfw.component.html',
  styleUrl: './nsfw.component.css'


})
export class NsfwComponent {
  links: { name: string, url: string }[] = [
    {
      name: 'BDSM',
      url: 'https://www.bdsmtest.org/r/jgeqMMPW'
    },
    {
      name: 'NSFW Wishlist',
      url: 'https://wishlist.lunalu.org/category/?category=nsfw'
    }
  ]

  linkClick(index:number){
    trackEvent(
      'nsfw_link_click',
      {
        props: {
          item: this.links[index].name,
          url: this.links[index].url,
          src: "luna.org"
        }
      }
    )
    window.open(this.links[index].url, '_blank');
  }

  protected readonly window = window;
}
