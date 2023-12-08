import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Products');
    this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addFirstItemToCart() {
    await this.addToCartBtn.first().click();
  }

}