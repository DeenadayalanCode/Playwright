import { test, expect } from '@playwright/test';

test('verify success toast message', async ({ page }) => {
  await page.goto(
    'https://testing.qaautomationlabs.com/notifications.php'
  );

  await page
    .getByRole('button', { name: 'Success Message', exact: true })
    .click();

  const toast = page.locator('[role="alert"].toast.bg-success');

  await expect(toast).toBeVisible();
  await expect(toast).toContainText('Notification Title');
  await expect(toast).toContainText(
    'Notification Body:- You Notification Body Goes Here.');

  await page.getByTestId(`qa-dark-toggle`).click();

  await expect(page.locator(`#qa-toast`)).toBeVisible();
  await page.screenshot();
  await expect(page.locator(`#qa-toast`)).toContainText(`Dark mode on`);

});