import { test, expect } from '@playwright/test';

test.describe('Domcy Comprehensive QA', () => {

    test('The Indecisive User: Add, Increment, and Remove Items', async ({ page }) => {
        await page.goto('/');

        // 1. Add Item
        const addButton = page.locator('button').filter({ has: page.locator('svg.lucide-plus') }).first();
        await addButton.click();

        // Check Badge 1
        // Scope to 'nav' to ensure we check the desktop/top bar first, or check both.
        // We will use the generic robust selector we fixed earlier
        const navbarOrderBtn = page.locator('nav').getByRole('button', { name: /order now/i }).first();
        await expect(navbarOrderBtn).toContainText('1');

        // 2. Open Cart
        await navbarOrderBtn.click();

        // 3. Increment Quantity inside Modal
        const plusBtn = page.locator('button').filter({ has: page.locator('svg.lucide-plus') }).first(); // Warning: this might grab the menu item row plus if modal overlay isn't blocking. 
        // Better selector for modal internal controls:
        const modal = page.locator('.fixed.z-\\[90\\]'); // Based on classes in PreOrderModal
        const modalPlus = modal.getByRole('button').filter({ has: page.locator('svg.lucide-plus') });

        await modalPlus.click();

        // Verify Quantity became 2 (There is a span with the number)
        await expect(modal.getByText('2', { exact: true })).toBeVisible();

        // 4. Remove Item
        const trashBtn = modal.getByRole('button').filter({ has: page.locator('svg.lucide-trash-2') });
        await trashBtn.click();

        // 5. Verify Empty State
        await expect(modal.getByText('Your cart is empty')).toBeVisible();
        await expect(modal.getByRole('button', { name: /browse menu/i })).toBeVisible();
    });

    test('Mobile View: Floating Button and Hamburger Menu', async ({ page }) => {
        // iPhone 13 Pro viewport
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');

        // 1. Verify standard pills are hidden
        const nav = page.locator('nav');
        await expect(nav.getByText('Live Music')).toBeHidden();

        // 2. Verify Hamburger Menu exists
        // looking for the 2-line menu icon
        const menuBtn = nav.getByRole('button').last(); // Usually the last button in the nav logic
        await expect(menuBtn).toBeVisible();

        // 3. Scroll to trigger Floating Button
        await page.evaluate(() => window.scrollTo(0, 500));

        // 4. Verify Floating Button appears
        // The classes 'fixed' and 'bottom-6' are on the wrapper motion.div, not the button itself
        const floatingBtn = page.locator('div.fixed.bottom-6 button');
        await expect(floatingBtn).toBeVisible();
        await expect(floatingBtn).toHaveText(/order/i);
    });

});
