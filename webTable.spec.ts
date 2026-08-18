import { test, expect, Locator } from '@playwright/test';
import { log } from 'node:console';

//dynamic Web table 
test('web table validation', async({page}) => {

   await page.goto("https://www.bing.com/sportsdetails?q=ipl%20points%20table%202026&sport=Cricket&scenario=League&TimezoneId=India%20Standard%20Time&IANATimezoneId=Asia/Kolkata&ISOTimezoneKey=IST&league=Cricket_IPL&queriedyear=2026&intent=Standings&seasonyear=2026&segment=sports&isl2=true&form=QBRE&");
    
   const table = page.locator('table').filter({has : page.getByRole('columnheader',{name : 'Team'})});
  
   await expect(table).toBeVisible();

   const teamName : string  = 'CSK';

   const rows = table.getByRole('row').filter({has: page.getByText(teamName,{ exact: true})});
   
   await expect(rows).toBeVisible();

   const cols = (await rows.getByRole('cell').allInnerTexts());
   
   for (const value of cols) 
      {console.log (`${teamName} row values :`, value.trim())};
}
);

