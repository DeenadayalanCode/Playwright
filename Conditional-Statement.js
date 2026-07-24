//**********  Home Assignment- Conditional Statement  **********
function launchBrowser(browserName) {
  if (browserName.toLowerCase() === "chrome") {
    console.log("Launching Chrome browser");
  } else {
    console.log(`Launching ${browserName} browser`);
  }
}

function runTests(testType) {
  switch (testType.toLowerCase()) {
    case "smoke":
      console.log("Running smoke tests");
      break;
    case "sanity":
      console.log("Running sanity tests");
      break;
    case "regression":
      console.log("Running regression tests");
      break;
    default:
      console.log("Running smoke tests");
  }
}

launchBrowser("chrome");
runTests("regression");