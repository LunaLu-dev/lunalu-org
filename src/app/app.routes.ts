import { Routes } from '@angular/router';
import { SocialsComponent } from './socials/socials.component';
import { PronounsComponent } from './pronouns/pronouns.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NsfwComponent } from './nsfw/nsfw.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'pronouns', component: PronounsComponent },
  { path: 'nsfw', component: NsfwComponent },
  { path: 'robots', redirectTo: '/robots.txt'}
];
