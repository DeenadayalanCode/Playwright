import { test, Locator, expect, Page } from '@playwright/test';


// Automate PVR Cinemas Booking Flow
test(`Validate Guest user able to book the ticket in PVR Cinemas movie ticket`, async ({ page }) => {
  
    await page.goto(' https://www.pvrcinemas.com/');

    const city = page.locator(`#city`);
    await city.click();
    await city.pressSequentially(`Chennai`);
    await page.getByText(`Chennai`).nth(1).click();

    const movie = page.locator(`#movie`);
    await movie.click();
    await page.getByText(`OHH MY DOG`, { exact: true }).nth(1).click();

    //await page.locator(`//li[@class='p-dropdown-item']/span`).click();

    const date = page.locator(`#date`);
    await page.getByRole(`option`).filter({ hasText: 'Today' }).click();

    const cinema = page.locator(`#cinema`);
    await page.getByRole(`option`).filter({ hasText: 'PVR VR' }).click()

    const time = page.locator(`#time`);
    await page.getByRole(`option`).filter({ hasText: 'Hindi' }).click()

    await page.getByRole(`button`, { name: 'Submit' }).click();
    
    async function handletermCondition(page: Page, action: 'Accept' | 'Reject') {
        if (action === 'Accept') {
            await page.getByRole(`button`, { name: 'Accept' }).click();
        } else {
            await page.getByRole(`button`, { name: 'Reject' }).click();
        }
    }
await handletermCondition(page, 'Accept');

const seatsAvailable = await page.locator("//span[@class='seat-current-pvr']");
await seatsAvailable.nth(5).click();
await seatsAvailable.nth(6).click();
const seatcategory = page.locator(`.seat-info > p`);
const seattype = await expect(seatcategory).toHaveText(/^(PRIME|ELITE|EXECUTIVE|BUDGET)$/);
// await expect(seatcategory).toHaveText('EXECUTIVE');
console.log(seattype);

const seatnumber = await page.locator('.select-seat-number .seat-number p');
await expect(seatnumber).toHaveCount(2);


await page.pause();

}
);

