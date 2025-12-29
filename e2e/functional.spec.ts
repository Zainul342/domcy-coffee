import { test, expect } from '@playwright/test';

test.describe('Domcy Coffee Critical Flows', () => {

    test.beforeEach(async ({ page }) => {
        // Go to home page before each test
        await page.goto('http://localhost:5173/');
    });

    test('User can navigate to Menu and add items to cart', async ({ page }) => {
        // 1. Click "Order Now" to scroll to menu or open cart? 
        // The "Order Now" in Navbar opens Cart, but checking "Menu" link first
        await page.getByText('Menu', { exact: true }).click();

        // 2. Add "Es Teh" (Non-Coffee) to cart
        // Using string locator if test id not present, but we added test-ids in MenuItemRow
        const esTehCard = page.locator('text=Es Teh').first().locator('..').locator('..').locator('..');
        // We expect the Add button to be visible
        await expect(esTehCard).toBeVisible();

        // Find add button within the card context
        await esTehCard.getByRole('button').click();

        // 3. Verify Cart opens or badge updates
        // Check for cart badge
        await expect(page.locator('.bg-\\[\\#FF6B35\\]')).toHaveText('1');

        // 4. Open Cart
        await page.getByText('Order Now').first().click();
        await expect(page.getByText('Shopping Cart')).toBeVisible();
        await expect(page.getByText('Es Teh')).toBeVisible();
        await expect(page.getByText('Rp4.000')).toBeVisible(); // Price verification (4k -> 4.000)
    });

    test('Find Us page has functional Map and Order button', async ({ page }) => {
        // 1. Navigate to 'Find Us' / Locations
        await page.goto('http://localhost:5173/locations');

        // 2. Verify Map is present
        await expect(page.locator('.leaflet-container')).toBeVisible();

        // 3. Search functionality
        const searchInput = page.getByPlaceholder('Search by city or area...');
        await searchInput.fill('Malang');
        await expect(page.getByText('Donomulyo, Malang')).toBeVisible();

        // 4. Click "Order" button in the Location card
        // This was the bug we fixed
        await page.getByRole('button', { name: 'Order' }).click();

        // 5. Verify Cart opens
        await expect(page.getByText('Shopping Cart')).toBeVisible();
        await expect(page.getByText('Your cart is empty')).toBeVisible(); // Assuming empty since we just navigated
    });

    test('Live Music section displays correctly', async ({ page }) => {
        // Scroll to events
        await page.goto('http://localhost:5173/#events');

        // Check for the specific recurring event we added
        await expect(page.getByText('Scala Acoustick')).toBeVisible();
        await expect(page.getByText('Every Week')).toBeVisible();

        // Check Reserve button
        await page.getByRole('button', { name: 'Reserve Table' }).first().click();
        await expect(page.getByText('Book a Table')).toBeVisible();
    });

});
