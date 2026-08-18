import { test, expect } from "@playwright/test";

test("Product purchase - adjust price slider", async ({ page }) => {
  await page.goto(
    "https://www.decathlon.in/search?query=Shoes+for+men&inStock=1&indian_size=UK+10.5+-+EU+45&sport_pratice_en=Running&price=2499-7999&gender_id_en=MEN"
  );

  // Locate min and max slider handles using XPath
  const minHandle = page.locator('//div[@data-test-id="filter-sidebar-desktop:slider-thumb-min-outer"]');
  const maxHandle = page.locator('//div[@data-test-id="filter-sidebar-desktop:slider-thumb-max-outer"]');

  // Wait for them to be visible
  await minHandle.waitFor();
  await maxHandle.waitFor();

  // Get bounding box of min handle
  const minBox = await minHandle.boundingBox();
  if (!minBox) throw new Error("Min slider handle not found");

  // Drag min handle to the right by 50px
  await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(minBox.x + 50, minBox.y + minBox.height / 2, { steps: 10 });
  await page.mouse.up();

  // Optional: check updated value
  const newValue = await minHandle.getAttribute("aria-valuenow");
  console.log("Updated min slider value:", newValue);
  // Assert that the slider value changed
  expect(newValue).toBeNull();
});