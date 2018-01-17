import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPoints(){
    return element(by.cssContainingText('div', 'votes')).$('span').getText();
  }

  getPlusOneButton(){
    return element(by.cssContainingText('button', 'Upvote'));
  }

  getMinusOneButton(){
    return element(by.cssContainingText('button', 'Downvote'));
  }
}
