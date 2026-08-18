import {test, Page, Locator, expect} from "@playwright/test";

test(`login for salesforce`, async({page}) => {

    //Launch salesforce Application
    await page.goto('https://login.salesforce.com/');

    // Enter username and password 
    const username = page.getByRole('textbox',{name: 'username'});
    await username.fill('deena8688.8b984017de61@agentforce.com');

    const password = page.getByRole('textbox',{name: 'password'});
    await password.fill('Salesforce@2026');  

    //Click on Log in button

    await page.getByRole('button',{name: 'Log In'}).click();   

    await page.pause();

    // Validate title of Salesforce Homepage
    
    await expect(page).toHaveTitle(`Lightning Experience | Salesforce`);

    // Click on profile icon
    await page.locator('.uiImage').click();
       
}
)