import { SeveninePage } from './app.po';

describe('sevenine App', () => {
  let page: SeveninePage;

  beforeEach(() => {
    page = new SeveninePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
