/// <reference types="mocha" />
import { Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { expect } from 'chai';

describe('Test de SaludoComponent', function () {
  let driver: any;

  before(async function () {
    let options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Debe mostrar el mensaje correcto en el componente Saludo', async function () {
    await driver.get('http://localhost:4200');

    console.log('Página cargada, buscando el mensaje...');

    let saludoElement = await driver.findElement(By.css('h1'));
    let saludoText = await saludoElement.getText();

    console.log(`Texto encontrado: "${saludoText}"`);

    expect(saludoText).to.equal('Hello World from Angular', 
      `El mensaje esperado era "Hello World from Angular", pero se encontró "${saludoText}"`);
  });
});