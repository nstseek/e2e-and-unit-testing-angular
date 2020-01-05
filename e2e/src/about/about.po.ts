import { browser, by, element } from 'protractor';
import { Routes } from '../app/app.po';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl + Routes.About) as Promise<any>;
  }

  getAboutParagraphs() {
    return element.all(
      by.css('mat-sidenav-content > div > app-about > div > p')
    );
  }

  getAboutTitle() {
    return element.all(
      by.css('mat-sidenav-content > div > app-about > div > div.title > span')
    );
  }
}
