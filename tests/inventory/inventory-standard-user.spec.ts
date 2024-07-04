import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginStdUser();
  });


test.describe('Cart Tests', () =>{
  
  test('Add first item to the cart', async ({ page }) => {
    let inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.pageTitle).toBeVisible();
    await inventoryPage.addFirstItemToCart();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.waitForSelector('a.shopping_cart_link > span');
    await expect(inventoryPage.shoppingCartBadge).toBeVisible();
    await expect((await inventoryPage.shoppingCartBadge.innerText()).toString()).toContain('1');
  });

  test('Verify cart elements gets updated', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.pageTitle).toBeVisible();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.waitForSelector('a.shopping_cart_link > span');
    await expect(inventoryPage.shoppingCartBadge).toBeVisible();
    await expect((await inventoryPage.shoppingCartBadge.innerText()).toString()).toContain('1');
  });
  
})