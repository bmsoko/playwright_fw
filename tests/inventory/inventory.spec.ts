import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginStdUser();
  });



test('Standard user add items to the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.pageTitle).toBeVisible();
  await inventoryPage.addFirstItemToCart();


});
