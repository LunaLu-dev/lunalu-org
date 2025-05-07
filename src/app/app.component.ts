import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, FooterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'lunalu-org';

  imagePath: string = `/luna_300x300.webp`;

  imgWidth: number = 300;
  imgHeight: number = 300;

  ngOnInit(): void {
    this.setImgDim();
    window.addEventListener('resize', () => this.setImgDim());
  }

  private setImgDim() {
    const width = window.innerWidth;

    //Mobile View
    if (width < 600) {
      this.imagePath = `/luna_200x200.webp`;
      this.imgWidth = 200;
      this.imgHeight = 200;
    } else {//Desktop View
      this.imagePath = `/luna_300x300.webp`;
      this.imgWidth = 300;
      this.imgHeight = 300;
    }
  }
}
