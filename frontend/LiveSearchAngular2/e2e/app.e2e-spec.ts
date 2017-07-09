import { LiveSearchAngular2Page } from './app.po';

describe('live-search-angular2 App', () => {
  let page: LiveSearchAngular2Page;

  beforeEach(() => {
    page = new LiveSearchAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
