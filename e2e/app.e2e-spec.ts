import { NetflixCatalogPage } from './app.po';

describe('netflix-catalog App', () => {
  let page: NetflixCatalogPage;

  beforeEach(() => {
    page = new NetflixCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
