//******************JavaScript Alerts************************//
import { test, expect } from "@playwright/test";

test(`Verify java alert handle for confirm and prompt`, async ({ page }) => {

    await page.goto(`https://the-internet.herokuapp.com/javascript_alerts`);

    page.on('dialog', async dialog => {

        console.log('Type of Alert : ', dialog.type());
        console.log('Message : ', dialog.message());
        const action = 'accept';

        if (dialog.type() === 'alert') {
            if (action === 'accept') {
                await dialog.accept();
                console.log('Alert is accepted');
            } else {
                await dialog.dismiss();
                console.log('Alert is Dismissed');
            }
        } else if (dialog.type() === 'confirm') {
            if (action === 'accept') {
                await dialog.accept();
                console.log('Confirm is accepted');
            } else {
                await dialog.dismiss();
                console.log('Confirm is Dismissed');
            }
        } else if (dialog.type() === 'prompt') {
            if (action === 'accept') {
                await dialog.accept('Deena added info');
                console.log('Prompt is accepted');
            } else {
                await dialog.dismiss();
                console.log('Prompt is Dismissed');
            }
        };
    });

//Simple Alert 
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    console.log('simple alert is completed');


//Confirm Alert
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    console.log('Confirm alert is completed');

//Prompt dialogs
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText('You entered: Deena added info');
    console.log('Prompt alert is completed');
});