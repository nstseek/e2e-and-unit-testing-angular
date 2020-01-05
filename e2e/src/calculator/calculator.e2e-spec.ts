import { AppPage } from './calculator.po';
import { browser, logging, ElementFinder } from 'protractor';

const selectedOpClass = 'mat-button-toggle-checked';

describe('Calculator tests:', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
    await browser.waitForAngularEnabled(true);
  });

  it('should display operators', async () => {
    expect(await page.getOperatorsBtn().count()).toEqual(4);
    expect(await page.getOperatorsComp().count()).toEqual(4);
  });

  it('should display result button', () => {
    expect(page.getResultButton()).toBeTruthy();
  });

  it('should display inputs', async () => {
    expect(await page.getInputs().count()).toEqual(2);
  });

  it('should display result field', () => {
    expect(page.getResult()).toBeTruthy();
  });

  it('should select + operator', async () => {
    const op = '+';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    const compOps = page.getOperatorsComp();
    const compOp: ElementFinder = await compOps.filter((elem) => elem.getAttribute('value').then((value) => op === value)).get(0);
    const classes = await compOp.getAttribute('class');
    expect(classes.indexOf(selectedOpClass)).toBeGreaterThanOrEqual(0);
  });

  it('should select - operator', async () => {
    const op = '-';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    const compOps = page.getOperatorsComp();
    const compOp: ElementFinder = await compOps.filter((elem) => elem.getAttribute('value').then((value) => op === value)).get(0);
    const classes = await compOp.getAttribute('class');
    expect(classes.indexOf(selectedOpClass)).toBeGreaterThanOrEqual(0);
  });

  it('should select * operator', async () => {
    const op = '*';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    const compOps = page.getOperatorsComp();
    const compOp: ElementFinder = await compOps.filter((elem) => elem.getAttribute('value').then((value) => op === value)).get(0);
    const classes = await compOp.getAttribute('class');
    expect(classes.indexOf(selectedOpClass)).toBeGreaterThanOrEqual(0);
  });

  it('should select / operator', async () => {
    const op = '/';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    const compOps = page.getOperatorsComp();
    const compOp: ElementFinder = await compOps.filter((elem) => elem.getAttribute('value').then((value) => op === value)).get(0);
    const classes = await compOp.getAttribute('class');
    expect(classes.indexOf(selectedOpClass)).toBeGreaterThanOrEqual(0);
  });

  it('should fill first input', async () => {
    const data = '1';
    const inp: ElementFinder = await page.getInputs().get(0);
    await inp.sendKeys(data);
    expect(await inp.getAttribute('value')).toEqual(data);
  });

  it('should fill second input', async () => {
    const data = '2';
    const inp: ElementFinder = await page.getInputs().get(1);
    await inp.sendKeys(data);
    expect(await inp.getAttribute('value')).toEqual(data);
  });

  it('should fill result field with the operation result when result button is clicked', async () => {
    const data = '1';
    const inp1: ElementFinder = await page.getInputs().get(0);
    await inp1.sendKeys(data);
    const inp2: ElementFinder = await page.getInputs().get(1);
    await inp2.sendKeys(data);
    const op = '+';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    await page.getResultButton().click();
    const resultField = page.getResult();
    const result = '2';
    expect(await resultField.getAttribute('value')).toEqual(result);
  });

  it('should calculate + operation and fill result', async () => {
    const data = '1';
    const inp1: ElementFinder = await page.getInputs().get(0);
    await inp1.sendKeys(data);
    const inp2: ElementFinder = await page.getInputs().get(1);
    await inp2.sendKeys(data);
    const op = '+';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    await page.getResultButton().click();
    const resultField = page.getResult();
    const result = '2';
    expect(await resultField.getAttribute('value')).toEqual(result);
  });

  it('should calculate - operation and fill result', async () => {
    const data = '1';
    const inp1: ElementFinder = await page.getInputs().get(0);
    await inp1.sendKeys(data);
    const inp2: ElementFinder = await page.getInputs().get(1);
    await inp2.sendKeys(data);
    const op = '-';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    await page.getResultButton().click();
    const resultField = page.getResult();
    const result = '0';
    expect(await resultField.getAttribute('value')).toEqual(result);
  });

  it('should calculate * operation and fill result', async () => {
    const data = '2';
    const inp1: ElementFinder = await page.getInputs().get(0);
    await inp1.sendKeys(data);
    const inp2: ElementFinder = await page.getInputs().get(1);
    await inp2.sendKeys(data);
    const op = '*';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    await page.getResultButton().click();
    const resultField = page.getResult();
    const result = '4';
    expect(await resultField.getAttribute('value')).toEqual(result);
  });

  it('should calculate / operation and fill result', async () => {
    const data = '2';
    const inp1: ElementFinder = await page.getInputs().get(0);
    await inp1.sendKeys(data);
    const inp2: ElementFinder = await page.getInputs().get(1);
    await inp2.sendKeys(data);
    const op = '/';
    const btnOps = page.getOperatorsBtn();
    const btnOp: ElementFinder = await btnOps.filter((elem) => elem.getText().then((value) => op === value)).get(0);
    await btnOp.click();
    await page.getResultButton().click();
    const resultField = page.getResult();
    const result = '1';
    expect(await resultField.getAttribute('value')).toEqual(result);
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
