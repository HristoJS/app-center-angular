import { AppCenterPage } from './app.po';

describe('app-center App', () => {
  let page: AppCenterPage;

  beforeEach(() => {
    page = new AppCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
