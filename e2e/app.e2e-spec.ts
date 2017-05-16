import { NgwebPage } from './app.po';

describe('ngweb App', () => {
  let page: NgwebPage;

  beforeEach(() => {
    page = new NgwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
