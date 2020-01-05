import { AppPage } from './about.po';
import { browser, logging } from 'protractor';

describe('About tests:', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
    await browser.waitForAngularEnabled(true);
  });

  it('should display about title', () => expect(page.getAboutTitle()).toBeTruthy());

  it('should display paragraphs', () => expect(page.getAboutParagraphs()).toBeTruthy());

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
