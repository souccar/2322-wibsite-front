import { Component, HostListener } from '@angular/core';
import { getThemeColor, setThemeColor } from 'src/app/utils/util';

@Component({
  selector: 'app-view-navbar',
  templateUrl: './view-navbar.component.html',
  styleUrls: ['./view-navbar.component.scss']
})
export class ViewNavbarComponent {

  constructor(){this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;}
  isDarkModeActive = false;
  showMobileMenu = false;
  onDarkModeChange(event): void {

    let color = getThemeColor();
    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    setThemeColor(color);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  @HostListener('window:click', ['$event'])
  onClick(event): void {
    this.showMobileMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.showMobileMenu = false;
  }
}
