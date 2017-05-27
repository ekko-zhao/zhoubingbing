import { browser, by, element } from 'protractor';

export class Angularjs2AppCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
