// Base class representing a generic component on a web page.
class WebComponent {
  public selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  click(): void {
    console.log(`Clicking the component with selector: ${this.selector}`);
  }

  focus(): void {
    console.log(`Focusing on the component with selector: ${this.selector}`);
  }
}

// Derived class that overrides an inherited method.
class Button extends WebComponent {
  override click(): void {
    // Call the click implementation inherited from WebComponent.
    super.click();
    console.log(`Button-specific click completed for: ${this.selector}`);
  }
}

// Derived class with its own property and method.
class TextInput extends WebComponent {
  public value: string = "";

  enterText(text: string): void {
    this.focus();
    this.value = text;
    console.log(`Entered "${this.value}" into: ${this.selector}`);
  }
}

// Demonstrate the component classes.
function testComponents(): void {
  const submitButton = new Button("#submit-button");
  const usernameInput = new TextInput("#username");

  submitButton.click();
  usernameInput.enterText("Deena");

  console.log(`Current input value: ${usernameInput.value}`);
}
testComponents();