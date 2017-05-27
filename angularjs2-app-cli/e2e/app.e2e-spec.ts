import { Angularjs2AppCliPage } from './app.po';

describe('angularjs2-app-cli App', () => {
  let page: Angularjs2AppCliPage;

  beforeEach(() => {
    page = new Angularjs2AppCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
