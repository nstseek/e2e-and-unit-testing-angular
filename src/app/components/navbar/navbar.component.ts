import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
  route = '/';

  constructor(private router: Router) {}

  ngDoCheck() {
    this.route = this.router.url;
  }
}
