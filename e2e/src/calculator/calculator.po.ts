import { browser, by, element } from 'protractor';
import { Routes } from '../app/app.po';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl + Routes.Calculator) as Promise<any>;
  }

  getOperatorsBtn() {
    return element.all(by.css('.mat-button-toggle-button'));
  }

  getOperatorsComp() {
    return element.all(by.css('mat-button-toggle'));
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
}
