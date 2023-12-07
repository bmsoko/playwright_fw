import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly loginTitle: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.getByRole('button', {name: 'Login'});
    this.loginTitle = page.locator('div', { hasText: 'Swag Labs' });
    this.userNameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
 
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    
  }
}