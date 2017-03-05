import { WarsawjsWorkshopPortalVodPage } from './app.po';

describe('warsawjs-workshop-portal-vod App', function() {
  let page: WarsawjsWorkshopPortalVodPage;

  beforeEach(() => {
    page = new WarsawjsWorkshopPortalVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
