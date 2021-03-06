import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  get route() {
    return this.router.url;
  }

  closeMenu() {
    document
      .querySelector(
        'body > app-root > app-navbar > mat-sidenav-container > div.mat-drawer-backdrop.ng-star-inserted'
      ).dispatchEvent(new Event('click'));
  }
}
