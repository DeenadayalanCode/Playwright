import { test, expect, Locator } from "@playwright/test";

test (`Trigger Alert and validate message`,async({page}) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    page.on('dialog', async dialog => {

        console.log('Dialog Type:', dialog.type());
        console.log('Dialog Message:', dialog.message());
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!');
        await dialog.accept();
    });
 
    const frame =page.frameLocator(`#iframeResult`);

    const trybutton = frame.getByRole('button',{ name: 'Try it' });

    await trybutton.click();

    const framemessage = frame.locator(`#demo`)
    
    await expect(framemessage).toHaveText('You pressed OK!');

    //const frame1 = await page.framelocator('#google_ads_top_frame')
    //const frame2 = await frame1.framelocator('#google_ads_top_frame')
    //const frame3 = await frame2.framelocator('#google_ads_top_frame')
    //const frame4 = await frame3.framelocator('#google_ads_top_frame')
    //await page.framelocator('#google_ads_top_frame').framelocator('#google_ads_top_frame')
    
}   
);