class BasePage {
  findElement(selector: string): void {
    console.log(`Finding element: ${selector}`);
  }

  clickElement(selector: string): void {
    console.log(`Clicking element: ${selector}`);
  }

  enterText(selector: string, text: string): void {
    console.log(`Entering "${text}" into: ${selector}`);
  }

  performCommonTasks(): void {
    console.log("BasePage: checking that the page is ready.");
  }
}

class LoginPage extends BasePage {
  override performCommonTasks(): void {
    // Reuse the common superclass behavior first.
    super.performCommonTasks();

    // Add behavior that is specific to the login page.
    console.log("LoginPage: performing login-page tasks.");
    this.findElement("#username");
    this.enterText("#username", "Deena");
    this.findElement("#password");
    this.enterText("#password", "Secret123");
    this.clickElement("#login-button");
  }
}

function demonstrateMethodOverriding(): void {
  const basePage = new BasePage();
  const loginPage = new LoginPage();

  console.log("BasePage object:");
  basePage.performCommonTasks();

  console.log("\nLoginPage object:");
  loginPage.performCommonTasks();
}
demonstrateMethodOverriding();
