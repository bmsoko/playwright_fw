import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Products');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
}