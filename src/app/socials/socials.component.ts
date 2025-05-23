import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import Analytics from 'analytics';
// @ts-ignore
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'lunalu.org',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-X5FND3X0TT']
    })
  ]
})

@Component({
  selector: 'app-socials',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {
  // Old Link: https://only-fans.uk/LunaLu
  links: { name: string, url: string }[] = [
    {
      name: 'LunaLuPlayz',
      url: 'https://only-fans.uk/lunaluplayz'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/1098996480011944017'
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/lunaluplayz'
    },
    {
      name: 'VRChat',
      url: 'https://vrchat.com/home/user/usr_19d6e456-23a6-41d4-8d0a-cf0ddd305e47'
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/user/LunaLu_04'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/LunaLu-dev'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Luna_Lu1'
    },
    {
      name: 'X',
      url: 'https://x.com/LunaLuplayz'
    },
    {
      name: 'Planet Minecraft',
      url: 'https://www.planetminecraft.com/member/_luna04_/'
    },
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.co.uk/lunaplayz04/'
    },
    {
      name: 'Wishlist',
      url: 'https://wishlist.lunalu.org/'
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/_LunaLu_/'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/31jo3k6nxhloleusg3tidy7ctimq?si=93424dcbf62e47ea'
    },
    {
      name: 'MyAnimeList',
      url: 'https://myanimelist.net/profile/LunaLuPlayz'
    }
  ]


  linkClick(index: number) {

    analytics.track('social_link_click', {
      item: this.links[index].name,
      url: this.links[index].url,
      src: "lunalu.nl"
    })
    window.open(this.links[index].url, '_blank');
  }

  protected readonly window = window;
}
