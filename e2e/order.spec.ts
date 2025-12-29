import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Domcy/i);
});

test('can add item to cart and check purchase link', async ({ page }) => {
  await page.goto('/');

  // Wait for hydration/animations
  await page.waitForTimeout(1000);

  // Scroll to menu section
  const menuSection = page.locator('#menu'); // Assuming there is an ID or use text
  if (await menuSection.isVisible()) {
    await menuSection.scrollIntoViewIfNeeded();
  } else {
    await page.getByText('Our Menu').first().scrollIntoViewIfNeeded();
  }

  // Wait specifically for at least one add button
  const addButton = page
    .locator('button')
    .filter({ has: page.locator('svg.lucide-plus') })
    .first();
  await expect(addButton).toBeVisible({ timeout: 10000 });

  // Click add to cart
  console.log('Clicking add button...');
  await addButton.click();
  console.log('Add button clicked.');

  // Check cart badge with retry
  // Look for the visible order button (Navbar Order Now or Floating Order)
  // Scope to 'nav' to avoid finding duplicates (e.g. in hidden mobile menu or hero)
  const navbarOrderBtn = page
    .locator('nav')
    .getByRole('button', { name: /order now/i })
    .first();
  const floatingOrderBtn = page
    .getByRole('button', { name: /order/i })
    .filter({ hasText: 'Order' })
    .first();

  let cartButton;
  if (await navbarOrderBtn.isVisible()) {
    console.log('Navbar button found visible');
    cartButton = navbarOrderBtn;
  } else {
    console.log('Floating button found visible');
    cartButton = floatingOrderBtn;
  }

  console.log('Checking cart button visibility...');
  await expect(cartButton).toBeVisible();
  console.log('Checking cart text for number...');
  // Allow any number in case previous tests left items or multiple items added
  await expect(cartButton).toHaveText(/\d+/, { timeout: 5000 });

  // Log the actual text for debugging
  const text = await cartButton.innerText();
  console.log(`Cart button text: "${text}"`);

  // Open Cart
  console.log('Clicking cart button...');
  await cartButton.click();

  // Check for Modal appearance
  console.log('Waiting for "Your Order" text...');
  await expect(page.getByText('Your Order')).toBeVisible({ timeout: 5000 });
  console.log('Modal opened.');

  // Verify items
  await expect(page.getByText(/Total Estimated/i)).toBeVisible();

  // Fill Pickup Time (required for checkout)
  console.log('Filling time...');
  const timeInput = page.locator('input[type="time"]');
  await timeInput.fill('12:00');
  await timeInput.blur(); // Ensure onChange fires

  // Click Checkout to go to details step
  console.log('Clicking Checkout...');
  await page.getByRole('button', { name: /checkout/i }).click();

  // Now we should be in details step
  console.log('Waiting for "Isi Data Diri"...');
  await expect(page.getByText('Isi Data Diri')).toBeVisible({ timeout: 5000 });

  // Fill Name
  await page.getByPlaceholder('Contoh: Budi Santoso').fill('Test User');

  // Fill Location/Table
  await page.getByPlaceholder(/Contoh: Meja 12/).fill('Meja 1');

  // Check WhatsApp button
  const whatsappButton = page.getByRole('button', { name: /confirm via whatsapp/i });
  await expect(whatsappButton).toBeVisible();
  await expect(whatsappButton).toBeEnabled();
});
