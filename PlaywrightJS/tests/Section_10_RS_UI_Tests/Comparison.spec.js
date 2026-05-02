

const {test,expect} = require('@playwright/test');

test('FlightAware homepage loads and key elements visible', async ({ page }) => {
    await page.goto('https://uk.flightaware.com/');

    // Verify page loaded
    await expect(page).toHaveURL(/flightaware/);

    // Verify main search box is visible
    const searchBox = page.locator('input[type="text"]');
    await expect(searchBox).toBeVisible();

    // Verify page title
    await expect(page).toHaveTitle(/FlightAware/);
});



