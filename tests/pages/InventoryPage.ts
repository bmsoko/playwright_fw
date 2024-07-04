import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly addToCartBtn: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Products');
    this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
    this.shoppingCartBadge = page.locator('a.shopping_cart_link > span');
  }

  async goto() {
    await this.page.goto('/');
  }

  async addFirstItemToCart() {
    await this.addToCartBtn.first().click();
  }

}