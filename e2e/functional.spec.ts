import { test, expect } from '@playwright/test';

test.describe('Domcy Coffee Critical Flows', () => {

    test.beforeEach(async ({ page }) => {
        // Go to home page before each test
        await page.goto('http://localhost:5173/');
    });

    test('User can open Cart via Navbar', async ({ page }) => {
        // 1. Click "Order Now" in Navbar (always visible)
        await page.getByRole('button', { name: 'Order Now' }).first().click();

        // 2. Verify Cart opens
        await expect(page.getByText('Shopping Cart')).toBeVisible();

        // 3. Verify empty cart message
        await expect(page.getByText('Your cart is empty')).toBeVisible();

        // 4. Close cart
        await page.getByRole('button', { name: 'Keep Browsing' }).click();
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
        // Use :text-is("Order") to match exact text and avoid "Order Now" in navbar
        // Or scope it to the location sidebar
        const locationsSection = page.locator('#locations');
        await locationsSection.getByRole('button', { name: 'Order', exact: true }).click();

        // 5. Verify Cart opens
        await expect(page.getByText('Shopping Cart')).toBeVisible();
    });

    test('Live Music section displays correctly', async ({ page }) => {
        // Scroll to events
        await page.goto('http://localhost:5173/');
        // Click generic navigation if needed or just scroll
        // Note: "Live Music" button in navbar is visible on desktop

        // Scroll down to events section manually or via url hash
        await page.goto('http://localhost:5173/#events');

        // Check for the specific recurring event we added
        await expect(page.getByText('Scala Acoustick')).toBeVisible();
        await expect(page.getByText('Saturday Night')).toBeVisible();

        // Check Reserve button
        const eventsSection = page.locator('#events');
        await eventsSection.getByRole('button', { name: 'Reserve Table' }).first().click();
        await expect(page.getByText('Book a Table')).toBeVisible();
    });

});
