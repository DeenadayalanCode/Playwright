import { test, expect } from '@playwright/test';

test('Print IPL Points Table', async ({ page }) => {

    // Increase timeout for this test
    test.setTimeout(120000);

    // Navigate to the page
    await page.goto(
        'https://timesofindia.indiatimes.com/sports/cricket/ipl',
        {
            waitUntil: 'domcontentloaded',
            timeout: 120000
        }
    );

    // Wait a few seconds for the Points Table to render
    await page.waitForTimeout(5000);

    // Locate all rows
    //const rows = page.locator("(//div[contains(@class,'points')]//following::li[@class='uoye7'])[1]");
    const rows = page.locator("(//div[contains(@class,'points')]//following::li[@class='uoye7'])");
    
    // Wait until at least one row is visible
    await rows.first().waitFor({ state: 'visible', timeout: 30000 });
    
    const iter = await rows.count();
    console.log(`Total rows found : ${iter}`);
    for(let i=0;i < iter;i++){
    const st = await rows.nth(i).innerText();
    //console.log(`\nRow ${i+1}`);
    console.log(`${st}`);
    }
}
);