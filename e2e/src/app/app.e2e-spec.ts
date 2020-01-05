import { AppPage, menuBackdropSelector } from './app.po';
import { browser, logging, by } from 'protractor';

// export const pause = 999 * 999;

const baseUrl = 'http://localhost:5000/';

enum Routes {
  Calculator = 'calculator',
  History = 'history',
  About = 'about'
}

enum RouterLinks {
  Calculator = 'Calculadora',
  History = 'Historico',
  About = 'Sobre'
}

describe('Basic tests:', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
    await browser.waitForAngularEnabled(true);
  });

  it('should display app title', async () => {
    expect(page.getTitleText()).toBeTruthy();
    expect(await page.getTitleText().getText()).toEqual('Calculadora');
  });

  it('should start in calculator page', async () => {
    expect(await browser.getCurrentUrl()).toEqual(baseUrl + Routes.Calculator);
  });

  it('should display menu button', () => {
    expect(page.getMenuButton()).toBeTruthy();
  });

  it('should start menu closed', () => {
    expect(browser.isElementPresent(by.css(menuBackdropSelector))).toBeFalsy();
  });

  it('should open menu', async () => {
    await page.getMenuButton().click();
    const backdrop = page.getMenuBackdrop();
    expect(backdrop).toBeTruthy();
  });

  it('should close menu', async () => {
    await page.getMenuButton().click();
    const backdrop = page.getMenuBackdrop();
    expect(backdrop).toBeTruthy();
    await backdrop.click();
    expect(await backdrop.isPresent()).toBeFalsy();
  });

  it('should display menu title', async () => {
    await page.getMenuButton().click();
    expect(await page.getMenuTitle().getText()).toEqual('Menu');
  });

  it('should navigate to history and close menu', async () => {
    await page.getMenuButton().click();
    await page
      .getMenuNavs()
      .filter((elem) =>
        elem.getText().then((text) => text === RouterLinks.History)
      )
      .get(0)
      .click();
    expect(browser.getCurrentUrl()).toEqual(baseUrl + Routes.History);
    const backdrop = page.getMenuBackdrop();
    expect(await backdrop.isPresent()).toBeFalsy();
  });

  it('should navigate to about and close menu', async () => {
    await page.getMenuButton().click();
    await page
      .getMenuNavs()
      .filter((elem) =>
        elem.getText().then((text) => text === RouterLinks.About)
      )
      .get(0)
      .click();
    expect(browser.getCurrentUrl()).toEqual(baseUrl + Routes.About);
    const backdrop = page.getMenuBackdrop();
    expect(await backdrop.isPresent()).toBeFalsy();
  });

  it('should navigate to calculator and close menu', async () => {
    await page.getMenuButton().click();
    await page
      .getMenuNavs()
      .filter((elem) =>
        elem.getText().then((text) => text === RouterLinks.Calculator)
      )
      .get(0)
      .click();
    expect(browser.getCurrentUrl()).toEqual(baseUrl + Routes.Calculator);
    const backdrop = page.getMenuBackdrop();
    expect(await backdrop.isPresent()).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
