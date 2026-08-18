import { test, expect } from '@playwright/test';

test("leaftop application login", async({page}) => {
    
    await page.goto("http://leaftaps.com/opentaps/");

    await page.getByRole("textbox",{name : "Username"}).fill('democsr');
    await page.getByRole("textbox",{name : "Password"}).fill('crmsfa');
    
    await page.getByRole("button",{name : "Login"}).click();

    await page.getByRole("link",{name : "CRM/SFA"}).click();
    
    await page.title("My Home | opentaps CRM");
    
    await page.getByRole("link",{name : "Leads"}).click();
    await page.getByRole("link",{name : "Create Lead"}).click();
    
    await page.locator(`#createLeadForm_companyName`).fill("Testleaf");
    await page.locator(`#createLeadForm_firstName`).fill("Deenadayalan");
    await page.locator(`#createLeadForm_lastName`).fill("Sundaramoorthy");
    //await page.locator(`#createLeadForm_dataSourceId`).selectOption('LEAD_EMPLOYEE');
    await page.locator(`#createLeadForm_dataSourceId`).selectOption({label : 'Employee'});
    await page.getByRole(`button`,{name : "Create Lead"}).click();

    // await page.pause()


}
);