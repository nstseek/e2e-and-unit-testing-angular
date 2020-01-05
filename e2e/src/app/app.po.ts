import { browser, by, element } from 'protractor';

export const menuBackdropSelector = 'mat-sidenav-container > div.mat-drawer-backdrop.ng-star-inserted.mat-drawer-shown';

export enum Routes {
  Calculator = 'calculator',
  History = 'history',
  About = 'about'
}

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getOperators() {
    return element.all(by.css('.mat-button-toggle-button'));
  }

  getResultButton() {
    return element(
      by.css(
        'mat-sidenav-content > div > app-calculator > div > div.operators > button'
      )
    );
  }

  getInputs() {
    return element.all(by.css('.mat-input-element:not(:disabled)'));
  }

  getResult() {
    return element(by.css('.mat-input-element:disabled'));
  }

  getTitleText() {
    return element(by.css('mat-sidenav-content > mat-toolbar > span'));
  }

  getMenuButton() {
    return element(by.css('mat-sidenav-content > mat-toolbar > button'));
  }

  getMenuNavs() {
    return element.all(
      by.css(
        'body > app-root > app-navbar > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a.mat-list-item'
      )
    );
  }

  getMenuBackdrop() {
    return element(
      by.css(menuBackdropSelector)
    );
  }

  getMenuTitle() {
    return element(by.css('mat-sidenav-container > mat-sidenav > div > mat-toolbar'));
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
