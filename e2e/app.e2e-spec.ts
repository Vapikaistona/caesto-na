import { TestAngular4Page } from './app.po';

describe('test-angular4 App', () => {
  let page: TestAngular4Page;

  beforeEach(() => {
    page = new TestAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
