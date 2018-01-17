import { AppPage } from './app.po';

describe('angular-testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('title should be app', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('app');
  });

  it('upvote/downvote multiple times, showing the proper vote tally', () => {
    page.navigateTo();
    expect(page.getPoints()).toBe('0');
    
    page.getPlusOneButton().click();
    page.getPlusOneButton().click();
    page.getPlusOneButton().click();

    expect(page.getPoints()).toBe('3');

    page.getMinusOneButton().click();
    page.getMinusOneButton().click();

    expect(page.getPoints()).toBe('1');
  });
});
