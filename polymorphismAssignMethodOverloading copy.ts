class APIClient {
  // Overload signatures define the permitted argument combinations.
  sendRequest(endpoint: string): void;
  sendRequest(
    endpoint: string,
    requestBody: string,
    requestStatus: boolean,
  ): void;

  // A single implementation handles both overload signatures.
  sendRequest(
    endpoint: string,
    requestBody?: string,
    requestStatus?: boolean,
  ): void {
    if (requestBody === undefined && requestStatus === undefined) {
      console.log(`Sending GET request to: ${endpoint}`);
      return;
    }

    console.log(`Sending POST request to: ${endpoint}`);
    console.log(`Request body: ${requestBody}`);
    console.log(
      requestStatus
        ? "Request completed successfully."
        : "Request was not successful.",
    );
  }
}

function demonstrateMethodOverloading(): void {
  const apiClient = new APIClient();

  // Calls the one-argument overload.
  apiClient.sendRequest("https://api.example.com/users");

  // Calls the three-argument overload.
  apiClient.sendRequest(
    "https://api.example.com/users",
    '{"name":"Dheena"}',
    true,
  );
}
demonstrateMethodOverloading();
