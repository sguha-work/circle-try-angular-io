import { CircleTryPage } from './app.po';

describe('circle-try App', () => {
  let page: CircleTryPage;

  beforeEach(() => {
    page = new CircleTryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
